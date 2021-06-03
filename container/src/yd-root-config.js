import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication(
//   "@single-spa/welcome",
//   () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   location => location.pathname === '/'
// );

registerApplication({
  name: "@yd/todos",
  app: () => System.import("@yd/todos"),
  activeWhen: ["/todos"]
});

registerApplication({
  name: "@yd/vue",
  app: () => System.import("@yd/vue"),
  activeWhen: ["/vue"]
});

start({
  urlRerouteOnly: true,
});
