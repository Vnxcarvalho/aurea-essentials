import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Leaf } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre — AuroraOils" }] }),
  component: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Leaf className="h-10 w-10 text-primary" />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Sobre a AuroraOils</h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Nascemos da ideia de unir ciência e tradição em cada gota. Trabalhamos diretamente
          com pequenos produtores ao redor do mundo, garantindo extração responsável e
          qualidade terapêutica em cada lote.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Cada óleo passa por análise cromatográfica e é testado por aromaterapeutas
          certificados. Pureza, transparência e respeito à natureza são nossos pilares.
        </p>
      </div>
    </SiteLayout>
  ),
});
