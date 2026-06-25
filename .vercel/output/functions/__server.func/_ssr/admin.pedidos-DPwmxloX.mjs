import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as brl } from "./router-DNBgN_Wg.mjs";
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
const ORDERS = [{
  id: "#A1042",
  customer: "Marina Souza",
  total: 289.7,
  status: "Em separação",
  date: "12 Mar"
}, {
  id: "#A1041",
  customer: "Carlos Lima",
  total: 149.9,
  status: "Em trânsito",
  date: "12 Mar"
}, {
  id: "#A1040",
  customer: "Ana Pereira",
  total: 419.5,
  status: "Entregue",
  date: "11 Mar"
}, {
  id: "#A1039",
  customer: "Bruno Castro",
  total: 89.9,
  status: "Pendente",
  date: "11 Mar"
}, {
  id: "#A1038",
  customer: "Júlia Mendes",
  total: 224.8,
  status: "Em trânsito",
  date: "10 Mar"
}, {
  id: "#A1037",
  customer: "Felipe Rocha",
  total: 559,
  status: "Entregue",
  date: "10 Mar"
}, {
  id: "#A1036",
  customer: "Larissa Dias",
  total: 109.9,
  status: "Cancelado",
  date: "09 Mar"
}];
const STATUSES = ["Pendente", "Em separação", "Em trânsito", "Entregue", "Cancelado"];
function Orders() {
  const [list, setList] = reactExports.useState(ORDERS);
  const statusColor = (s) => s === "Entregue" ? "bg-primary/10 text-primary" : s === "Cancelado" ? "bg-destructive/10 text-destructive" : "bg-accent/30 text-accent-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Pedidos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Últimos pedidos recebidos." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Pedido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Cliente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4", children: "Ação" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border hover:bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-mono text-xs", children: o.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: o.customer }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground", children: o.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-right", children: brl(o.total) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-0.5 text-xs font-medium ${statusColor(o.status)}`, children: o.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: o.status, onChange: (e) => {
          const v = e.target.value;
          setList((l) => l.map((x, i) => i === idx ? {
            ...x,
            status: v
          } : x));
        }, className: "rounded-md border border-border bg-background px-2 py-1 text-xs", children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) }) })
      ] }, o.id)) })
    ] }) })
  ] });
}
export {
  Orders as component
};
