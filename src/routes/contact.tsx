import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us — Sri Venkateshwara Medical Gas Agency",
      },
      {
        name: "description",
        content:
          "Contact Sri Venkateshwara Medical Gas Agency for ambulance, oxygen, medical gas and freezer box services in Jangaon.",
      },
    ],
  }),
  component: ContactPage,
});
