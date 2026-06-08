import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Package, ShoppingCart, Leaf, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — AuroraOils" }] }),
  component: AdminLayout,
});

const NAV = [
  { to: "/admin", label: "Visão Geral", icon: LayoutDashboard, exact: true },
  { to: "/admin/estoque", label: "Estoque", icon: Package },
  { to: "/admin/pedidos", label: "Pedidos", icon: ShoppingCart },
];

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex bg-secondary/30">
      <aside className="hidden lg:flex w-60 flex-col border-r border-border bg-card">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Leaf className="h-5 w-5 text-primary" /> AuroraOils
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV.map((n) => {
            const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <Link to="/" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted">
            <LogOut className="h-4 w-4" /> Sair
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
          <h1 className="font-semibold">Painel administrativo</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Voltar à loja</Link>
        </header>
        <div className="lg:hidden border-b border-border bg-card px-4 py-2 flex gap-2 overflow-x-auto">
          {NAV.map((n) => {
            const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
            return (
              <Link key={n.to} to={n.to} className={cn("text-xs px-3 py-1.5 rounded-md whitespace-nowrap", active ? "bg-primary text-primary-foreground" : "bg-muted")}>
                {n.label}
              </Link>
            );
          })}
        </div>
        <main className="flex-1 p-6 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
