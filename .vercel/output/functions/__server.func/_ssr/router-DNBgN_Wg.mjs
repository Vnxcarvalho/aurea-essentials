import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DSvFDgdN.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Ctx = reactExports.createContext(null);
function CartProvider({ children }) {
  const [items, setItems] = reactExports.useState([]);
  const [open, setOpen] = reactExports.useState(false);
  const add = reactExports.useCallback((p, qty = 1) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.product.id === p.id);
      if (ex) return prev.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product: p, qty }];
    });
  }, []);
  const remove = reactExports.useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  }, []);
  const setQty = reactExports.useCallback((id, qty) => {
    setItems((prev) => prev.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  }, []);
  const clear = reactExports.useCallback(() => setItems([]), []);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value: { items, open, setOpen, add, remove, setQty, clear, subtotal, count }, children });
}
const useCart = () => {
  const c = reactExports.useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
};
const brl = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const ThemeCtx = reactExports.createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const stored = typeof localStorage !== "undefined" && localStorage.getItem("theme");
    const initial = stored ?? (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
    }
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCtx.Provider, { value: { theme, setTheme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") }, children });
}
const useTheme = () => {
  const c = reactExports.useContext(ThemeCtx);
  if (!c) throw new Error("useTheme must be inside ThemeProvider");
  return c;
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AuroraOils — Óleos essenciais premium" },
      { name: "description", content: "Óleos essenciais 100% puros e terapêuticos." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) });
}
const $$splitComponentImporter$9 = () => import("./sobre-BKS5DKAs.mjs");
const Route$9 = createFileRoute("/sobre")({
  head: () => ({
    meta: [{
      title: "Sobre — AuroraOils"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./rastreio-DFfk7I0W.mjs");
const Route$8 = createFileRoute("/rastreio")({
  head: () => ({
    meta: [{
      title: "Rastreio — AuroraOils"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./produtos-Bz8D5yWt.mjs");
const Route$7 = createFileRoute("/produtos")({
  head: () => ({
    meta: [{
      title: "Produtos — AuroraOils"
    }, {
      name: "description",
      content: "Coleção completa de óleos essenciais puros."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./checkout-Bm2zXPHU.mjs");
const Route$6 = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Checkout — AuroraOils"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin-CdXaIrZD.mjs");
const Route$5 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin — AuroraOils"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-xS_jcC5E.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AuroraOils — Óleos essenciais premium"
    }, {
      name: "description",
      content: "Óleos essenciais 100% puros para bem-estar, equilíbrio e foco."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin.index-K0izhgcH.mjs");
const Route$3 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const ex1 = "/assets/ex1-BdfeMESc.jpg";
const ex2 = "/assets/ex2-BBA5v0sB.jpg";
const ex3 = "/assets/ex3-aDNmN-Bm.jpg";
const ex4 = "/assets/ex4-CqS0nt5X.jpg";
const ex5 = "/assets/ex5-Vu9DI6f2.jpg";
const ex6 = "/assets/ex6-BiNg36hv.jpg";
const ex7 = "/assets/ex7-CZcQeKo8.jpg";
const ex8 = "/assets/ex8-CWKoyxFU.jpg";
const ex9 = "/assets/ex9-EzTm2WAm.jpg";
const ex10 = "/assets/ex10-Ct3nY9w0.jpg";
const ex11 = "/assets/ex11-C0zCCheJ.png";
const img = (seed) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=900&q=80`;
const PRODUCTS = [
  {
    id: "1",
    slug: "oleo-essencial-lavanda",
    name: "Óleo Essencial de Lavanda",
    price: 89.9,
    oldPrice: 119.9,
    image: ex1,
    category: "Relaxante",
    rating: 4.9,
    reviews: 312,
    stock: 48,
    bestSeller: true,
    short: "Calmante natural ideal para relaxamento e sono profundo.",
    description: "Extraído por destilação a vapor das flores de Lavandula angustifolia cultivadas na Provença. 100% puro, terapêutico e sustentável.",
    composition: "100% Óleo essencial puro de Lavandula angustifolia.",
    usage: "Difusor: 3 a 5 gotas. Massagem: diluir 2% em óleo vegetal.",
    care: "Manter ao abrigo da luz, em temperatura inferior a 25ºC. Evitar contato com os olhos."
  },
  {
    id: "2",
    slug: "oleo-essencial-melaleuca",
    name: "Óleo Essencial de Melaleuca",
    price: 79.9,
    image: ex2,
    category: "Purificante",
    rating: 4.8,
    reviews: 241,
    stock: 32,
    bestSeller: true,
    short: "Tea Tree puro com ação antisséptica e purificante.",
    description: "Tea Tree australiano selecionado, conhecido por sua ação antibacteriana, antifúngica e purificante.",
    composition: "100% Melaleuca alternifolia.",
    usage: "Aplicar diluído na pele ou usar em difusor (4 gotas).",
    care: "Não ingerir. Manter longe do alcance de crianças."
  },
  {
    id: "3",
    slug: "oleo-essencial-alecrim",
    name: "Óleo Essencial de Alecrim",
    price: 69.9,
    image: ex3,
    category: "Energizante",
    rating: 4.7,
    reviews: 188,
    stock: 21,
    bestSeller: true,
    short: "Estimulante mental — foco, memória e disposição.",
    description: "Alecrim cineol orgânico, conhecido por estimular a concentração e a clareza mental.",
    composition: "100% Rosmarinus officinalis ct. cineol.",
    usage: "Difusor durante o estudo ou trabalho. 3 a 4 gotas.",
    care: "Evitar uso em gestantes e crianças menores de 6 anos."
  },
  {
    id: "4",
    slug: "oleo-essencial-eucalipto",
    name: "Óleo Essencial de Eucalipto",
    price: 64.9,
    image: ex4,
    category: "Respiratório",
    rating: 4.8,
    reviews: 276,
    stock: 55,
    bestSeller: true,
    short: "Liberador das vias respiratórias e refrescante natural.",
    description: "Eucalyptus globulus extraído na Tasmânia. Excelente para vapores e ambientes.",
    composition: "100% Eucalyptus globulus.",
    usage: "Inalação: 2 gotas em água quente. Difusor: 5 gotas.",
    care: "Não aplicar puro na pele. Evitar em crianças menores de 10 anos."
  },
  {
    id: "5",
    slug: "oleo-essencial-hortela",
    name: "Óleo Essencial de Hortelã-Pimenta",
    price: 74.9,
    oldPrice: 94.9,
    image: ex5,
    category: "Energizante",
    rating: 4.9,
    reviews: 203,
    stock: 18,
    short: "Refrescante, alivia tensões e dores de cabeça.",
    description: "Mentha piperita rica em mentol, ideal para alívio de tensões e estímulo mental.",
    composition: "100% Mentha piperita.",
    usage: "Diluir 1 gota em óleo vegetal e massagear as têmporas.",
    care: "Sensação intensa de frescor — usar com moderação."
  },
  {
    id: "6",
    slug: "oleo-essencial-laranja-doce",
    name: "Óleo Essencial de Laranja Doce",
    price: 49.9,
    image: ex6,
    category: "Bem-estar",
    rating: 4.7,
    reviews: 412,
    stock: 80,
    short: "Aroma alegre que eleva o humor e harmoniza ambientes.",
    description: "Extraído por prensagem a frio das cascas. Suave, doce e energizante.",
    composition: "100% Citrus sinensis.",
    usage: "Difusor: 5 a 7 gotas. Banho aromático: 3 gotas.",
    care: "Fotossensibilizante — evitar exposição solar após aplicação tópica."
  },
  {
    id: "7",
    slug: "oleo-essencial-bergamota",
    name: "Óleo Essencial de Bergamota",
    price: 99.9,
    image: ex7,
    category: "Relaxante",
    rating: 4.8,
    reviews: 156,
    stock: 14,
    short: "Cítrico equilibrante — reduz ansiedade e estresse.",
    description: "Bergamota italiana, com aroma cítrico floral. Auxilia no equilíbrio emocional.",
    composition: "100% Citrus bergamia.",
    usage: "Difusor: 4 gotas. Não aplicar antes da exposição solar.",
    care: "Altamente fotossensibilizante."
  },
  {
    id: "8",
    slug: "oleo-essencial-camomila",
    name: "Óleo Essencial de Camomila Romana",
    price: 149.9,
    image: ex8,
    category: "Relaxante",
    rating: 5,
    reviews: 92,
    stock: 9,
    short: "Suave e calmante — ideal para peles sensíveis e crianças.",
    description: "Camomila romana premium. Conhecida por suas propriedades calmantes e anti-inflamatórias.",
    composition: "100% Anthemis nobilis.",
    usage: "Difusor: 2 a 3 gotas. Massagem: diluir 1% em óleo vegetal.",
    care: "Conservar em frasco âmbar bem fechado."
  },
  {
    id: "9",
    slug: "oleo-essencial-limao-siciliano",
    name: "Óleo Essencial de Limão Siciliano",
    price: 54.9,
    image: ex9,
    category: "Purificante",
    rating: 4.6,
    reviews: 220,
    stock: 60,
    short: "Purifica o ar e clareia a mente.",
    description: "Limão siciliano prensado a frio. Cítrico vibrante e revitalizante.",
    composition: "100% Citrus limon.",
    usage: "Difusor: 5 gotas. Limpeza natural: adicionar em sprays caseiros.",
    care: "Fotossensibilizante."
  },
  {
    id: "10",
    slug: "oleo-essencial-ylang-ylang",
    name: "Óleo Essencial de Ylang Ylang",
    price: 129.9,
    oldPrice: 159.9,
    image: ex10,
    category: "Bem-estar",
    rating: 4.9,
    reviews: 134,
    stock: 12,
    short: "Floral exótico — sensualidade e equilíbrio hormonal.",
    description: "Cananga odorata premium das Comores. Aroma floral profundo.",
    composition: "100% Cananga odorata.",
    usage: "Difusor: 2 gotas (aroma intenso).",
    care: "Usar com moderação."
  },
  {
    id: "11",
    slug: "oleo-essencial-cedro",
    name: "Óleo Essencial de Cedro Atlas",
    price: 84.9,
    image: img("photo-1602928321679-560bb453f190"),
    category: "Respiratório",
    rating: 4.7,
    reviews: 87,
    stock: 25,
    short: "Amadeirado profundo — concentração e enraizamento.",
    description: "Cedro Atlas marroquino, com notas amadeiradas terapêuticas.",
    composition: "100% Cedrus atlantica.",
    usage: "Difusor: 4 gotas para foco ou meditação.",
    care: "Evitar uso em gestantes."
  },
  {
    id: "12",
    slug: "oleo-essencial-gengibre",
    name: "Óleo Essencial de Gengibre",
    price: 94.9,
    image: ex11,
    category: "Energizante",
    rating: 4.8,
    reviews: 101,
    stock: 17,
    short: "Aquece, energiza e auxilia a digestão.",
    description: "Zingiber officinale destilado a vapor. Picante e revitalizante.",
    composition: "100% Zingiber officinale.",
    usage: "Massagem diluído a 2% em óleo vegetal.",
    care: "Pode irritar peles sensíveis."
  }
];
const CATEGORIES = ["Todos", "Relaxante", "Energizante", "Purificante", "Respiratório", "Bem-estar"];
const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
const $$splitComponentImporter$2 = () => import("./produto._slug-WBqtJcjd.mjs");
const $$splitNotFoundComponentImporter = () => import("./produto._slug-Djn9kSGL.mjs");
const Route$2 = createFileRoute("/produto/$slug")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.product.name} — AuroraOils`
    }, {
      name: "description",
      content: loaderData?.product.short ?? ""
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.pedidos-DPwmxloX.mjs");
const Route$1 = createFileRoute("/admin/pedidos")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.estoque-BBwIzIxR.mjs");
const Route = createFileRoute("/admin/estoque")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreRoute = Route$9.update({
  id: "/sobre",
  path: "/sobre",
  getParentRoute: () => Route$a
});
const RastreioRoute = Route$8.update({
  id: "/rastreio",
  path: "/rastreio",
  getParentRoute: () => Route$a
});
const ProdutosRoute = Route$7.update({
  id: "/produtos",
  path: "/produtos",
  getParentRoute: () => Route$a
});
const CheckoutRoute = Route$6.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$a
});
const AdminRoute = Route$5.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const AdminIndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const ProdutoSlugRoute = Route$2.update({
  id: "/produto/$slug",
  path: "/produto/$slug",
  getParentRoute: () => Route$a
});
const AdminPedidosRoute = Route$1.update({
  id: "/pedidos",
  path: "/pedidos",
  getParentRoute: () => AdminRoute
});
const AdminEstoqueRoute = Route.update({
  id: "/estoque",
  path: "/estoque",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminEstoqueRoute,
  AdminPedidosRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  CheckoutRoute,
  ProdutosRoute,
  RastreioRoute,
  SobreRoute,
  ProdutoSlugRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CATEGORIES as C,
  PRODUCTS as P,
  Route$2 as R,
  useTheme as a,
  brl as b,
  router as r,
  useCart as u
};
