import type { Metadata } from "next";

import VueUnivers, { metadonneesUnivers } from "@/components/VueUnivers";

export const metadata: Metadata = metadonneesUnivers("k-beauty");

export default function PageKBeauty() {
  return <VueUnivers slug="k-beauty" />;
}
