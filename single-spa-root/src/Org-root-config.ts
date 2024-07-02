import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: 'styleguide',
  app: () => System.import('styleguide') as Promise<LifeCycles<any>>,
  activeWhen: ['/styleguide'],
});

registerApplication({
  name: 'utility',
  app: () => System.import('utility') as Promise<LifeCycles<any>>,
  activeWhen: ['/utility'],
});

// registerApplication({
//   name: "@Org/navbar",
//   app: () => System.import("@Org/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
