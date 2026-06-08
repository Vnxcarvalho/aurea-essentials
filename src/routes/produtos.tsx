import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — AuroraOils" },
      { name: "description", content: "Coleção completa de óleos essenciais puros." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todos");
  const [sort, setSort] = useState("relevance");

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.location.hash === "#busca") {
      searchRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        searchRef.current?.focus();
      }, 300);
    }
  }, []);

  const list = useMemo(() => {
    let l = PRODUCTS.filter((p) => {
      const matchQ =
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.short.toLowerCase().includes(q.toLowerCase());

      const matchC = cat === "Todos" || p.category === cat;

      return matchQ && matchC;
    });

    if (sort === "price-asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "rating") l = [...l].sort((a, b) => b.rating - a.rating);

    return l;
  }, [q, cat, sort]);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Todos os óleos
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {PRODUCTS.length} produtos disponíveis
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

            <Input
              id="busca"
              ref={searchRef}
              placeholder="Buscar óleos..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm"
          >
            <option value="relevance">Relevância</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="rating">Mais avaliados</option>
          </select>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition",
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border bg-card hover:bg-muted"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            Nenhum produto encontrado.
          </p>
        )}
      </div>
    </SiteLayout>
  );
}