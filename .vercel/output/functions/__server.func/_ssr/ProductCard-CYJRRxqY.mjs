import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useCart, b as brl } from "./router-DNBgN_Wg.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { f as Star } from "../_libs/lucide-react.mjs";
function ProductCard({ product }) {
  const { add } = useCart();
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/produto/$slug",
        params: { slug: product.slug },
        className: "relative aspect-square overflow-hidden bg-secondary/30",
        children: [
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 z-10 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground", children: [
            "-",
            discount,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: product.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/produto/$slug",
          params: { slug: product.slug },
          className: "mt-1 text-sm font-medium leading-snug hover:text-primary line-clamp-2",
          children: product.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-accent text-accent" }),
        product.rating,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "(",
          product.reviews,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold", children: brl(product.price) }),
        product.oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground line-through", children: brl(product.oldPrice) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          className: "mt-3 w-full",
          onClick: () => add(product),
          children: "Adicionar"
        }
      )
    ] })
  ] });
}
export {
  ProductCard as P
};
