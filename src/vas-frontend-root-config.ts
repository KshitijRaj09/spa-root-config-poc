import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@vas-spa1/spa-navbar",
  app: () => System.import<LifeCycles>("@vas-spa1/spa-navbar"),
  activeWhen: () => true,
  customProps: () => ({
    domElement: document.getElementById("spa-navbar"),
  }),
});

registerApplication({
  name: "@vas-spa1/spa-learning",
  app: () => System.import<LifeCycles>("@vas-spa1/spa-learning"),
  activeWhen: ["/spa1"],
  customProps: () => ({
    domElement: document.getElementById("spa-learning1"),
  }),
});

registerApplication({
  name: "@vas-spa1/spa-application2",
  app: () => System.import<LifeCycles>("@vas-spa1/spa-application2"),
  activeWhen: ["/spa2"],
  customProps: () => ({
    domElement: document.getElementById("spa-application2"),
  }),
});

// registerApplication({
//   name: "@vas-frontend/navbar",
//   app: () => System.import("@vas-frontend/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
