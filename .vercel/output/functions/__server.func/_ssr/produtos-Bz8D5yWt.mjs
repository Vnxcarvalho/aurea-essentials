import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-Ckd0SVeW.mjs";
import { P as ProductCard } from "./ProductCard-CYJRRxqY.mjs";
import { P as PRODUCTS, C as CATEGORIES } from "./router-DNBgN_Wg.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { S as Search } from "../_libs/lucide-react.mjs";
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
import "./button-BC9oXVxV.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
function ProductsPage() {
  const [q, setQ] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState("Todos");
  const [sort, setSort] = reactExports.useState("relevance");
  const searchRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (window.location.hash === "#busca") {
      searchRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      setTimeout(() => {
        searchRef.current?.focus();
      }, 300);
    }
  }, []);
  const list = reactExports.useMemo(() => {
    let l = PRODUCTS.filter((p) => {
      const matchQ = p.name.toLowerCase().includes(q.toLowerCase()) || p.short.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "Todos" || p.category === cat;
      return matchQ && matchC;
    });
    if (sort === "price-asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "rating") l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [q, cat, sort]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight", children: "Todos os óleos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
      PRODUCTS.length,
      " produtos disponíveis"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "busca", ref: searchRef, placeholder: "Buscar óleos...", value: q, onChange: (e) => setQ(e.target.value), className: "pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "rounded-md border border-border bg-card px-3 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "relevance", children: "Relevância" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-asc", children: "Menor preço" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-desc", children: "Maior preço" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Mais avaliados" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: cn("rounded-full border px-4 py-1.5 text-xs font-medium transition", cat === c ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:bg-muted"), children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
    list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center text-sm text-muted-foreground", children: "Nenhum produto encontrado." })
  ] }) });
}
export {
  ProductsPage as component
};
