import { registerApplication, start, LifeCycles } from "single-spa";

// Register the 'home' application
registerApplication({
  name: 'home',
  app: () => System.import('home') as Promise<LifeCycles<any>>,
  activeWhen: ['/home'], // Activate the 'home' application when the URL matches '/home'
});

// Register the 'styleguide' application
registerApplication({
  name: 'styleguide',
  app: () => System.import('styleguide') as Promise<LifeCycles<any>>,
  activeWhen: ['/'], // Activate the 'styleguide' application when the URL matches '/'
});

// Start the single-spa framework
start({
  urlRerouteOnly: false, // Allow full page reloads when navigating between applications
});
