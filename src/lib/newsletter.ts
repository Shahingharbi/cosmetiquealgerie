import "server-only";

/**
 * Vrai si au moins un canal d'inscription à la lettre est configuré.
 *
 * Tant que ce n'est pas le cas, aucun formulaire n'est affiché : un champ qui
 * répondrait « l'inscription n'a pas abouti » à chaque visiteur ferait plus de
 * tort que son absence. Les variables sont lues au build, comme celles des
 * commandes : après les avoir posées sur Vercel, il faut redéployer.
 */
export const newsletterActive = Boolean(
  (process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) || process.env.NEWSLETTER_SHEET_WEBHOOK,
);
