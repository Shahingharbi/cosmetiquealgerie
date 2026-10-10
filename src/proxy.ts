import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import retires from "../data/produits-retires.json";

/**
 * Fiches retirées du catalogue : réponse 410 « supprimé définitivement ».
 *
 * Le 10/10/2026, 292 produits ont été retirés : médicaments (vente réservée
 * aux pharmacies, loi 18-11), dispositifs médicaux et produits au statut
 * incertain (voir donnees/exclusions-medicaments.json). Une fiche absente du
 * catalogue répondrait 404 ; le 410 dit à Google que l'absence est voulue et
 * définitive, ce qui accélère la sortie de son index.
 *
 * Le proxy ne s'exécute que sur /produit/ et ne fait qu'une lecture dans un
 * ensemble en mémoire : aucun coût mesurable sur les autres fiches.
 */
const SLUGS_RETIRES = new Set<string>(retires.slugs);

const PAGE_410 = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Produit retiré | Cosmétique Algérie</title></head><body style="margin:0;font-family:Helvetica,Arial,sans-serif;background:#f4f4f2;color:#141414"><main style="max-width:560px;margin:15vh auto;padding:0 24px"><p style="font:12px monospace;letter-spacing:.12em;text-transform:uppercase;color:#909090">Cosmétique Algérie</p><h1 style="font-weight:400;font-size:28px;line-height:1.2">Ce produit n'est plus proposé</h1><p style="font-size:15px;line-height:1.6;color:#4f4f4f">Il ne fait plus partie de notre catalogue. Retrouvez nos soins, notre maquillage et nos parfums sur la page d'accueil.</p><p><a href="/" style="display:inline-block;margin-top:8px;background:#141414;color:#fff;padding:14px 22px;text-decoration:none;font-size:13px;letter-spacing:.06em;text-transform:uppercase">Retour à l'accueil</a></p></main></body></html>`;

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").filter(Boolean)[1];
  if (slug && SLUGS_RETIRES.has(slug)) {
    return new NextResponse(PAGE_410, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/produit/:path*",
};
