import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { brl, useCart } from "@/lib/cart";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — AuroraOils" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [done, setDone] = useState(false);
  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 24.9;

  if (done) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-md px-4 py-24 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h1 className="mt-6 text-2xl font-semibold">Pedido confirmado!</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enviamos os detalhes para seu e-mail. Acompanhe o status em Rastreio.
          </p>
          <div className="mt-6 flex gap-2 justify-center">
            <Button asChild><Link to="/rastreio">Rastrear pedido</Link></Button>
            <Button variant="outline" asChild><Link to="/produtos">Continuar comprando</Link></Button>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Finalizar compra</h1>
        <p className="mt-1 text-sm text-muted-foreground">Compre como visitante — sem cadastro.</p>

        <form
          onSubmit={(e) => { e.preventDefault(); clear(); setDone(true); }}
          className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold mb-4">Contato</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>E-mail</Label><Input type="email" required placeholder="voce@email.com" /></div>
                <div><Label>Telefone</Label><Input required placeholder="(11) 99999-9999" /></div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Entrega</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2"><Label>Nome completo</Label><Input required /></div>
                <div><Label>CEP</Label><Input required placeholder="00000-000" /></div>
                <div><Label>Cidade</Label><Input required /></div>
                <div className="sm:col-span-2"><Label>Endereço</Label><Input required /></div>
                <div><Label>Número</Label><Input required /></div>
                <div><Label>Complemento</Label><Input /></div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Pagamento</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2"><Label>Número do cartão</Label><Input required placeholder="0000 0000 0000 0000" /></div>
                <div><Label>Validade</Label><Input required placeholder="MM/AA" /></div>
                <div><Label>CVV</Label><Input required placeholder="123" /></div>
                <div className="sm:col-span-2"><Label>Nome no cartão</Label><Input required /></div>
              </div>
            </section>
          </div>

          <aside className="rounded-xl border border-border bg-card p-6 h-fit lg:sticky lg:top-24">
            <h3 className="font-semibold mb-4">Resumo</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {items.map((i) => (
                <div key={i.product.id} className="flex gap-3 text-sm">
                  <img src={i.product.image} alt="" className="h-12 w-12 rounded object-cover bg-secondary" />
                  <div className="flex-1">
                    <p className="line-clamp-1">{i.product.name}</p>
                    <p className="text-xs text-muted-foreground">x{i.qty}</p>
                  </div>
                  <p className="font-medium">{brl(i.product.price * i.qty)}</p>
                </div>
              ))}
              {items.length === 0 && <p className="text-sm text-muted-foreground">Carrinho vazio.</p>}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{brl(subtotal)}</span></div>
              <div className="flex justify-between"><span>Frete</span><span>{shipping === 0 ? "Grátis" : brl(shipping)}</span></div>
              <div className="flex justify-between font-semibold pt-2 border-t border-border text-base">
                <span>Total</span><span>{brl(subtotal + shipping)}</span>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full mt-6" disabled={items.length === 0}>
              Pagar {brl(subtotal + shipping)}
            </Button>
          </aside>
        </form>
      </div>
    </SiteLayout>
  );
}
