import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

// Cache des pages dans Workers KV : les pages produit générées à la demande
// (dynamicParams) ne sont calculées qu'une fois, puis servies depuis le cache,
// comme l'ISR de Vercel. Les pages pré-générées au build y sont copiées au déploiement.
// La file en mémoire relance en tâche de fond les pages à revalidate = 86400.
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
  queue: memoryQueue,
  enableCacheInterception: true,
});
