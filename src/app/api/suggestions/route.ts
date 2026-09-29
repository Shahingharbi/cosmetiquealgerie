import { NextResponse } from "next/server";
import { rechercher } from "@/lib/recherche";

/**
 * Suggestions de la barre de recherche.
 *
 * Pourquoi une route serveur plutôt qu'un index envoyé au navigateur : le
 * catalogue pèse près de huit mégaoctets. Même réduit aux seuls noms et
 * visuels, un index client coûterait plusieurs mégaoctets au premier
 * caractère tapé — inacceptable sur un trafic très majoritairement mobile.
 * L'index inversé de `lib/recherche` vit déjà en mémoire du process, la
 * réponse ne coûte donc qu'une intersection de listes.
 *
 * La barre de recherche reste un formulaire GET classique : ces suggestions
 * sont un confort par-dessus, jamais le seul chemin vers les résultats.
 */

/** Au-delà, la liste déroulante devient une page de résultats déguisée. */
const MAX_PRODUITS = 6;
const MAX_LIENS = 3;

export async function GET(requete: Request) {
  const q = new URL(requete.url).searchParams.get("q")?.trim() ?? "";

  // Un seul caractère ramènerait un quasi-échantillon du catalogue, trié par
  // rien. On attend d'avoir de quoi discriminer.
  if (q.length < 2) {
    return NextResponse.json({ produits: [], marques: [], rayons: [] });
  }

  const res = rechercher(q, MAX_PRODUITS);

  return NextResponse.json(
    {
      produits: res.produits.slice(0, MAX_PRODUITS).map((p) => ({
        nom: p.nom,
        marque: p.marque,
        prix: p.prix,
        contenance: p.contenance,
        image: p.image ?? null,
        url: p.url,
      })),
      marques: res.marques.slice(0, MAX_LIENS).map((m) => ({ nom: m.nom, url: m.url })),
      rayons: res.rayons.slice(0, MAX_LIENS).map((r) => ({ nom: r.nom, url: r.url })),
      total: res.total,
    },
    {
      headers: {
        // Les suggestions d'une même requête ne changent qu'au redéploiement.
        "Cache-Control": "public, max-age=300, s-maxage=3600",
      },
    },
  );
}
