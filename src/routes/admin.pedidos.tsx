import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { brl } from "@/lib/cart";

export const Route = createFileRoute("/admin/pedidos")({
  component: Orders,
});

const ORDERS = [
  { id: "#A1042", customer: "Marina Souza", total: 289.7, status: "Em separação", date: "12 Mar" },
  { id: "#A1041", customer: "Carlos Lima", total: 149.9, status: "Em trânsito", date: "12 Mar" },
  { id: "#A1040", customer: "Ana Pereira", total: 419.5, status: "Entregue", date: "11 Mar" },
  { id: "#A1039", customer: "Bruno Castro", total: 89.9, status: "Pendente", date: "11 Mar" },
  { id: "#A1038", customer: "Júlia Mendes", total: 224.8, status: "Em trânsito", date: "10 Mar" },
  { id: "#A1037", customer: "Felipe Rocha", total: 559.0, status: "Entregue", date: "10 Mar" },
  { id: "#A1036", customer: "Larissa Dias", total: 109.9, status: "Cancelado", date: "09 Mar" },
];

const STATUSES = ["Pendente", "Em separação", "Em trânsito", "Entregue", "Cancelado"];

function Orders() {
  const [list, setList] = useState(ORDERS);

  const statusColor = (s: string) =>
    s === "Entregue" ? "bg-primary/10 text-primary" :
    s === "Cancelado" ? "bg-destructive/10 text-destructive" :
    "bg-accent/30 text-accent-foreground";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Pedidos</h2>
        <p className="text-sm text-muted-foreground">Últimos pedidos recebidos.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left p-4">Pedido</th>
              <th className="text-left p-4">Cliente</th>
              <th className="text-left p-4">Data</th>
              <th className="text-right p-4">Total</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Ação</th>
            </tr>
          </thead>
          <tbody>
            {list.map((o, idx) => (
              <tr key={o.id} className="border-t border-border hover:bg-muted/30">
                <td className="p-4 font-mono text-xs">{o.id}</td>
                <td className="p-4">{o.customer}</td>
                <td className="p-4 text-muted-foreground">{o.date}</td>
                <td className="p-4 text-right">{brl(o.total)}</td>
                <td className="p-4">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor(o.status)}`}>{o.status}</span>
                </td>
                <td className="p-4">
                  <select
                    value={o.status}
                    onChange={(e) => {
                      const v = e.target.value;
                      setList((l) => l.map((x, i) => (i === idx ? { ...x, status: v } : x)));
                    }}
                    className="rounded-md border border-border bg-background px-2 py-1 text-xs"
                  >
                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
