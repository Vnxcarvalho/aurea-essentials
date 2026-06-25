import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { L as Leaf, a as LayoutDashboard, P as Package, b as ShoppingCart, c as LogOut } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const NAV = [{
  to: "/admin",
  label: "Visão Geral",
  icon: LayoutDashboard,
  exact: true
}, {
  to: "/admin/estoque",
  label: "Estoque",
  icon: Package
}, {
  to: "/admin/pedidos",
  label: "Pedidos",
  icon: ShoppingCart
}];
function AdminLayout() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-secondary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex w-60 flex-col border-r border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 flex items-center px-6 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5 text-primary" }),
        " AuroraOils"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 space-y-1", children: NAV.map((n) => {
        const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: n.to, className: cn("flex items-center gap-3 rounded-md px-3 py-2 text-sm transition", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(n.icon, { className: "h-4 w-4" }),
          " ",
          n.label
        ] }, n.to);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Sair"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-16 border-b border-border bg-card flex items-center justify-between px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold", children: "Painel administrativo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground", children: "Voltar à loja" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-b border-border bg-card px-4 py-2 flex gap-2 overflow-x-auto", children: NAV.map((n) => {
        const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: cn("text-xs px-3 py-1.5 rounded-md whitespace-nowrap", active ? "bg-primary text-primary-foreground" : "bg-muted"), children: n.label }, n.to);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-6 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
export {
  AdminLayout as component
};
