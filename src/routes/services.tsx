import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Our Services — Sri Venkateshwara Medical Gas Agency",
      },
      {
        name: "description",
        content:
          "Medical gas supply, oxygen services, ambulance transportation, and freezer box services available 24/7 in Jangaon.",
      },
    ],
  }),
  component: ServicesPage,
});
