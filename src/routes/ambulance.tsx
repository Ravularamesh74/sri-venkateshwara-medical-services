import { createFileRoute } from "@tanstack/react-router";
import { AmbulancePage } from "@/components/site/ambulence";

export const Route = createFileRoute("/ambulance")({
  head: () => ({
    meta: [
      {
        title: "24/7 Ambulance Service — Sri Venkateshwara Medical Gas Agency",
      },
      {
        name: "description",
        content:
          "Fast and reliable 24/7 ambulance services in Jangaon. ALS, BLS, patient transport and emergency medical response.",
      },
    ],
  }),
  component: AmbulancePage,
});
