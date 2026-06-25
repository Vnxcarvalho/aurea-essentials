import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as brl, P as PRODUCTS } from "./router-DNBgN_Wg.mjs";
import { D as DollarSign, b as ShoppingCart, P as Package, g as TrendingUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function Overview() {
  const stats = [{
    label: "Vendas do mês",
    value: brl(48720.5),
    icon: DollarSign,
    change: "+12%"
  }, {
    label: "Pedidos pendentes",
    value: "18",
    icon: ShoppingCart,
    change: "+3"
  }, {
    label: "Produtos em estoque",
    value: PRODUCTS.reduce((s, p) => s + p.stock, 0).toString(),
    icon: Package,
    change: ""
  }, {
    label: "Ticket médio",
    value: brl(187.4),
    icon: TrendingUp,
    change: "+5%"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Visão Geral" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Acompanhe o desempenho da loja." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-2xl font-semibold", children: s.value }),
      s.change && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary mt-1", children: [
        s.change,
        " vs mês anterior"
      ] })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Top produtos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: PRODUCTS.slice(0, 5).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground w-6", children: [
          i + 1,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "", className: "h-10 w-10 rounded object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: brl(p.price) })
      ] }, p.id)) })
    ] })
  ] });
}
export {
  Overview as component
};
