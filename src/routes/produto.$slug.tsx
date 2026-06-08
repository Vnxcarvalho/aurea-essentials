import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getProduct } from "@/lib/products";
import { brl, useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Star, Minus, Plus, ShieldCheck, Truck, Leaf } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — AuroraOils` },
      { name: "description", content: loaderData?.product.short ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl py-24 text-center">
        <h1 className="text-2xl font-semibold">Produto não encontrado</h1>
        <Button asChild className="mt-6"><Link to="/produtos">Ver produtos</Link></Button>
      </div>
    </SiteLayout>
  ),
  component: PDP,
});

function PDP() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
          <Link to="/produtos" className="hover:text-foreground">Produtos</Link> /{" "}
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-secondary/40">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg bg-secondary/40 border border-border">
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs uppercase tracking-wider text-primary font-medium">{product.category}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <span className="text-muted-foreground">{product.rating} · {product.reviews} avaliações</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-semibold">{brl(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-base text-muted-foreground line-through">{brl(product.oldPrice)}</span>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">-{discount}%</span>
                </>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">em até 3x sem juros</p>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.short}</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-border rounded-md">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 hover:bg-muted"><Minus className="h-4 w-4" /></button>
                <span className="px-4 text-sm font-medium w-10 text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-3 hover:bg-muted"><Plus className="h-4 w-4" /></button>
              </div>
              <Button size="lg" className="flex-1" onClick={() => add(product, qty)}>
                Adicionar ao carrinho
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Frete grátis acima de R$200</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia de pureza</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" /> 100% natural</div>
            </div>

            <Accordion type="single" collapsible className="mt-10 border-t border-border">
              <AccordionItem value="desc">
                <AccordionTrigger>Descrição</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="comp">
                <AccordionTrigger>Composição</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{product.composition}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="usage">
                <AccordionTrigger>Como Usar</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{product.usage}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger>Cuidados</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{product.care}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
