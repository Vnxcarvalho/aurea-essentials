import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AuroraOils — Óleos essenciais premium" },
      { name: "description", content: "Óleos essenciais 100% puros para bem-estar, equilíbrio e foco." },
    ],
  }),
  component: Index,
});

function Index() {
  const bestSellers = PRODUCTS.filter((p) => p.bestSeller).slice(0, 4);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Novo blend de aromaterapia
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              A natureza, em sua forma{" "}
              <span className="text-primary">mais pura.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Óleos essenciais 100% terapêuticos, extraídos de plantas selecionadas ao redor do mundo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/produtos">Comprar agora <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/sobre">Nossa história</Link>
              </Button>
            </div>
            <div className="mt-10 flex gap-8 text-xs text-muted-foreground">
              <div><strong className="block text-foreground text-lg">100%</strong> Puros</div>
              <div><strong className="block text-foreground text-lg">+50k</strong> Clientes</div>
              <div><strong className="block text-foreground text-lg">4.9★</strong> Avaliações</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80"
                alt="Frasco de óleo essencial"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card p-4 shadow-sm sm:block">
              <p className="text-xs text-muted-foreground">Mais vendido</p>
              <p className="text-sm font-semibold">Óleo de Lavanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Leaf, t: "100% Puros", d: "Sem aditivos sintéticos" },
            { icon: ShieldCheck, t: "Certificados", d: "Lote rastreável" },
            { icon: Sparkles, t: "Aromaterapia", d: "Bem-estar diário" },
            { icon: HeartHandshake, t: "Comércio justo", d: "Produtores parceiros" },
          ].map((b) => (
            <div key={b.t} className="flex items-start gap-3">
              <div className="rounded-lg bg-background p-2.5 text-primary"><b.icon className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold">{b.t}</p>
                <p className="text-xs text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Mais vendidos</h2>
            <p className="text-sm text-muted-foreground mt-1">Os favoritos da nossa comunidade.</p>
          </div>
          <Link to="/produtos" className="text-sm font-medium text-primary hover:underline hidden sm:inline">
            Ver tudo →
          </Link>
        </div>
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h3 className="text-2xl sm:text-3xl font-semibold">Crie seu ritual de bem-estar</h3>
          <p className="mt-3 text-sm opacity-90 max-w-xl mx-auto">
            Descubra blends curados para sono, foco e energia.
          </p>
          <Button variant="secondary" size="lg" className="mt-6" asChild>
            <Link to="/produtos">Explorar coleção</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
