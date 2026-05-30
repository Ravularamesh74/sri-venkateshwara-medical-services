import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Sri Venkateshwara Medical Gas Agency",
      },
      {
        name: "description",
        content:
          "Learn about Sri Venkateshwara Medical Gas Agency, Jangaon's trusted provider of medical oxygen, ambulance, and freezer box services.",
      },
    ],
  }),
  component: AboutPage,
});
