import { Leaf } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <Leaf className="h-5 w-5 text-primary" /> AureaOils
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Óleos essenciais 100% puros, extraídos com cuidado para elevar seu bem-estar.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Loja</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/produtos" className="hover:text-foreground">Produtos</Link></li>
            <li><Link to="/rastreio" className="hover:text-foreground">Rastrear pedido</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-foreground">Sobre nós</Link></li>
            <li><Link to="/admin" className="hover:text-foreground">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground">Receba 10% off na primeira compra.</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AureaOils · Todos os direitos reservados
      </div>
    </footer>
  );
}
