import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { brl, useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <Link
        to="/produto/$slug"
        params={{ slug: product.slug }}
        className="relative aspect-square overflow-hidden bg-secondary/30"
      >
        {discount > 0 && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
            -{discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <Link
          to="/produto/$slug"
          params={{ slug: product.slug }}
          className="mt-1 text-sm font-medium leading-snug hover:text-primary line-clamp-2"
        >
          {product.name}
        </Link>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          {product.rating} <span>({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-base font-semibold">{brl(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{brl(product.oldPrice)}</span>
          )}
        </div>
        <Button
          size="sm"
          className="mt-3 w-full"
          onClick={() => add(product)}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}
