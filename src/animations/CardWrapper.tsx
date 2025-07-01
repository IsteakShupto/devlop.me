import type { ReactNode } from "react";

export default function CardWrapper({ children }: { children: ReactNode }) {
  return (
    <section
      className={`transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.15] hover:shadow-lg`}
    >
      {children}
    </section>
  );
}
