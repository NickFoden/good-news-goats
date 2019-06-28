import { mount, route } from "navi";

export default mount({
  "/": route({
    title: "Good News Goats",
    getView: () => import("./index.mdx")
  }),

  "/projects": route({
    title: "Projects",
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));

      return import("./projects.mdx");
    }
  })
});
