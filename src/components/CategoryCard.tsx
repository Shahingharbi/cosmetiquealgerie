import Image from "next/image";
import Link from "next/link";
import type { Vignette } from "@/types/site";
import { cn } from "@/lib/utils";

interface Props {
  category: Vignette;
  className?: string;
}

export function CategoryCard({ category, className }: Props) {
  return (
    <Link
      href={category.href}
      className={cn("group block text-[#141414] focus:outline-none", className)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#d4d4d4]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 768px) 70vw, 18vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>
      <p className="mt-3 text-center text-[13px] md:text-[14px] uppercase tracking-[0.06em] text-[#141414]">
        {category.title}
      </p>
    </Link>
  );
}
