interface Props {
  faq: { question: string; reponse: string }[];
  /** Émet le JSON-LD FAQPage. À n'activer qu'une fois par page. */
  jsonLd?: boolean;
}

/**
 * Bloc questions/réponses.
 *
 * Rendu en <details> natifs : le contenu reste dans le HTML même replié, donc
 * lisible par les moteurs et par les assistants qui citent des passages. C'est
 * aussi ce qui permet de s'en passer sans JavaScript.
 */
export default function BlocFaq({ faq, jsonLd = true }: Props) {
  if (faq.length === 0) return null;

  const donnees = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.reponse },
    })),
  };

  return (
    <section>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }}
        />
      )}
      <h2 className="text-[18px] leading-[1.3] tracking-tight text-[#141414] lg:text-[20px]">
        Questions fréquentes
      </h2>
      <dl className="mt-4 max-w-[70ch] divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
        {faq.map((f, i) => (
          <details key={i} className="group py-4" name="faq-categorie">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-3 text-[14px] leading-[1.45] text-[#141414]">
              <dt className="font-medium">{f.question}</dt>
              <span
                aria-hidden
                className="mt-[2px] shrink-0 text-[#909090] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <dd className="mt-3 max-w-[68ch] text-[14px] leading-[1.65] text-[#4f4f4f]">
              {f.reponse}
            </dd>
          </details>
        ))}
      </dl>
    </section>
  );
}
