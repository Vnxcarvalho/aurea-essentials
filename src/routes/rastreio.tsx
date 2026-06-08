import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Truck, MapPin, CheckCircle2, Search } from "lucide-react";

export const Route = createFileRoute("/rastreio")({
  head: () => ({ meta: [{ title: "Rastreio — AuroraOils" }] }),
  component: TrackingPage,
});

const STEPS = [
  { icon: Package, label: "Pedido recebido", date: "12 Mar, 09:14" },
  { icon: CheckCircle2, label: "Pagamento aprovado", date: "12 Mar, 09:18" },
  { icon: Truck, label: "Em trânsito", date: "13 Mar, 17:42" },
  { icon: MapPin, label: "Saiu para entrega", date: "—" },
  { icon: CheckCircle2, label: "Entregue", date: "—" },
];

function TrackingPage() {
  const [code, setCode] = useState("");
  const [shown, setShown] = useState(false);
  const current = 2;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Rastrear pedido</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Digite o código de rastreio enviado por e-mail para acompanhar a entrega.
        </p>

        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => { e.preventDefault(); setShown(true); }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ex: BR123456789BR"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button type="submit" size="lg">Rastrear</Button>
        </form>

        {shown && (
          <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Código</p>
                <p className="font-mono text-sm">{code || "BR123456789BR"}</p>
              </div>
              <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                Em trânsito
              </span>
            </div>

            <ol className="mt-8 space-y-6">
              {STEPS.map((s, i) => {
                const done = i <= current;
                return (
                  <li key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <s.icon className="h-4 w-4" />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className={`mt-1 h-10 w-px ${done && i < current ? "bg-primary" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="pt-2">
                      <p className={`text-sm font-medium ${done ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</p>
                      <p className="text-xs text-muted-foreground">{s.date}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
