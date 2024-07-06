import { registerApplication, start, LifeCycles } from "single-spa";



registerApplication({
  name: 'home',
  app: () => System.import('home') as Promise<LifeCycles<any>>,
  activeWhen: ['/home'],
});

registerApplication({
  name: 'styleguide',
  app: () => System.import('styleguide') as Promise<LifeCycles<any>>,
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: false,
});
