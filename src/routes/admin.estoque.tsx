import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { brl } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Plus, Pencil } from "lucide-react";

export const Route = createFileRoute("/admin/estoque")({
  component: Stock,
});

function Stock() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Estoque</h2>
          <p className="text-sm text-muted-foreground">Gerencie produtos e quantidades.</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Adicionar produto</Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left p-4">Produto</th>
              <th className="text-left p-4">Categoria</th>
              <th className="text-right p-4">Preço</th>
              <th className="text-right p-4">Estoque</th>
              <th className="text-left p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => {
              const low = p.stock < 20;
              return (
                <tr key={p.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-4 flex items-center gap-3">
                    <img src={p.image} alt="" className="h-10 w-10 rounded object-cover" />
                    <span className="font-medium">{p.name}</span>
                  </td>
                  <td className="p-4 text-muted-foreground">{p.category}</td>
                  <td className="p-4 text-right">{brl(p.price)}</td>
                  <td className="p-4 text-right">{p.stock}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${low ? "bg-accent/30 text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                      {low ? "Estoque baixo" : "Em estoque"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button size="sm" variant="ghost"><Pencil className="h-3.5 w-3.5" /></Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
