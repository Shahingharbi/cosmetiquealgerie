/**
 * Wordmark Cosmétique Algérie.
 *
 * Dessiné en texte SVG plutôt qu'en tracés : le rendu suit la font du site,
 * le fichier pèse quelques centaines d'octets et reste net à toute taille.
 * Le point final reprend la ponctuation typographique des marques de soin,
 * sans copier aucune identité existante.
 */

interface Props {
  className?: string;
  /** "horizontal" pour le header, "compact" pour le mobile et le footer. */
  variante?: "horizontal" | "compact";
  /** Titre accessible. Mettre "" quand le logo est purement décoratif. */
  titre?: string;
}

export default function LogoCosmetiqueAlgerie({
  className = "",
  variante = "horizontal",
  titre = "Cosmétique Algérie",
}: Props) {
  const compact = variante === "compact";

  return (
    <svg
      viewBox={compact ? "0 0 132 40" : "0 0 232 20"}
      role={titre ? "img" : "presentation"}
      aria-label={titre || undefined}
      aria-hidden={titre ? undefined : true}
      className={className}
      fill="currentColor"
    >
      {compact ? (
        <>
          <text
            x="0"
            y="16"
            fontFamily="var(--font-sans)"
            fontSize="17"
            fontWeight="500"
            letterSpacing="-0.02em"
          >
            Cosmétique
          </text>
          <text
            x="0"
            y="35"
            fontFamily="var(--font-sans)"
            fontSize="17"
            fontWeight="300"
            letterSpacing="0.02em"
          >
            Algérie.
          </text>
        </>
      ) : (
        <text
          x="0"
          y="16"
          fontFamily="var(--font-sans)"
          fontSize="17"
          fontWeight="500"
          letterSpacing="-0.02em"
        >
          Cosmétique{" "}
          <tspan fontWeight="300" letterSpacing="0.02em">
            Algérie.
          </tspan>
        </text>
      )}
    </svg>
  );
}
