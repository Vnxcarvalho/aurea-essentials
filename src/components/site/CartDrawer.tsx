import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { brl, useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const { open, setOpen, items, setQty, remove, subtotal } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Seu carrinho ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 px-6">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Seu carrinho está vazio</p>
            <Button onClick={() => setOpen(false)} asChild>
              <Link to="/produtos">Explorar produtos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((i) => (
                <div key={i.product.id} className="flex gap-3">
                  <img src={i.product.image} alt={i.product.name} className="h-20 w-20 rounded-md object-cover bg-secondary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2">{i.product.name}</p>
                    <p className="text-xs text-muted-foreground">{brl(i.product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center border border-border rounded-md">
                        <button onClick={() => setQty(i.product.id, i.qty - 1)} className="p-1.5 hover:bg-muted"><Minus className="h-3 w-3" /></button>
                        <span className="px-2 text-sm">{i.qty}</span>
                        <button onClick={() => setQty(i.product.id, i.qty + 1)} className="p-1.5 hover:bg-muted"><Plus className="h-3 w-3" /></button>
                      </div>
                      <button onClick={() => remove(i.product.id)} className="ml-auto text-muted-foreground hover:text-destructive p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold whitespace-nowrap">{brl(i.product.price * i.qty)}</p>
                </div>
              ))}
            </div>
            <SheetFooter className="border-t border-border pt-4 flex-col gap-3 sm:flex-col">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{brl(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Frete calculado no checkout.</p>
              <Button className="w-full" size="lg" asChild onClick={() => setOpen(false)}>
                <Link to="/checkout">Finalizar compra</Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
