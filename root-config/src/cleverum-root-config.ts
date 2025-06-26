import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cleverum/story-submission",
  app: () => import("@cleverum/story-submission"),
  activeWhen: ["/story"],
});

start();
