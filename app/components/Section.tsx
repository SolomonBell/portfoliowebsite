import type { ReactNode } from "react";

export default function Section({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      {children}
    </section>
  );
}
