import type { Metadata } from "next";

import VueUnivers, { metadonneesUnivers } from "@/components/VueUnivers";

export const metadata: Metadata = metadonneesUnivers("bio");

export default function PageBio() {
  return <VueUnivers slug="bio" />;
}
