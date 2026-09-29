import type { Metadata } from "next";

import VueUnivers, { metadonneesUnivers } from "@/components/VueUnivers";

export const metadata: Metadata = metadonneesUnivers("peau-sensible");

export default function PagePeauSensible() {
  return <VueUnivers slug="peau-sensible" />;
}
