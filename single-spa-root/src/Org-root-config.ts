import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>( "" ),
  activeWhen: ["/"],
});

registerApplication({
  name: 'home',
  app: () => System.import('home') as Promise<LifeCycles<any>>,
  activeWhen: ['/home'],
});

start({
  urlRerouteOnly: true,
});
