// Icônes SVG de l'interface, nommées par fonction visuelle.
// Toutes héritent de la couleur courante via `fill`/`stroke`.

import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
  width: size ?? 24,
  height: size ?? 24,
});

export function SearchIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function AccountIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-3.5 5-5 8-5s6.5 1.5 8 5" />
    </svg>
  );
}

export function CartDotIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

export function ChevronRightIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export function ChevronLeftIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

export function ChevronDownIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function MenuIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function CloseIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...base(size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
