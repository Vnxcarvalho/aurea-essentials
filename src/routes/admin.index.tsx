import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { brl } from "@/lib/cart";
import { TrendingUp, ShoppingCart, Package, DollarSign } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: Overview,
});

function Overview() {
  const stats = [
    { label: "Vendas do mês", value: brl(48720.5), icon: DollarSign, change: "+12%" },
    { label: "Pedidos pendentes", value: "18", icon: ShoppingCart, change: "+3" },
    { label: "Produtos em estoque", value: PRODUCTS.reduce((s, p) => s + p.stock, 0).toString(), icon: Package, change: "" },
    { label: "Ticket médio", value: brl(187.4), icon: TrendingUp, change: "+5%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Visão Geral</h2>
        <p className="text-sm text-muted-foreground">Acompanhe o desempenho da loja.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <s.icon className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-3 text-2xl font-semibold">{s.value}</p>
            {s.change && <p className="text-xs text-primary mt-1">{s.change} vs mês anterior</p>}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold mb-4">Top produtos</h3>
        <ul className="space-y-3">
          {PRODUCTS.slice(0, 5).map((p, i) => (
            <li key={p.id} className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-6">{i + 1}.</span>
              <img src={p.image} alt="" className="h-10 w-10 rounded object-cover" />
              <span className="flex-1 text-sm">{p.name}</span>
              <span className="text-sm font-medium">{brl(p.price)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
