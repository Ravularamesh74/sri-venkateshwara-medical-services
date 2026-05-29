import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import medGas from "@/assets/medical-gas.jpg";
import nitrous from "@/assets/nitrous-cylinders.jpg";
import co2 from "@/assets/co2-cylinders.jpg";
import oxygen from "@/assets/oxygen-service.jpg";
import access from "@/assets/oxygen-accessories.jpg";
import freezer from "@/assets/freezer-box.jpg";
import ambulance from "@/assets/ambulance-service.jpg";
import paramedic from "@/assets/paramedic-action.jpg";
import hero from "@/assets/hero-ambulance.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Sri Venkateshwara Medical Gas Agency" },
    { name: "description", content: "Photos of our medical gas, ambulance, oxygen and freezer box services in Jangaon." },
  ]}),
  component: Gallery,
});

const photos = [
  { src: medGas, label: "Medical Gas Cylinders" },
  { src: ambulance, label: "Ambulance Fleet" },
  { src: oxygen, label: "Oxygen Concentrator" },
  { src: freezer, label: "Freezer Box" },
  { src: nitrous, label: "Nitrous Oxide" },
  { src: co2, label: "CO2 Cylinders" },
  { src: access, label: "Oxygen Accessories" },
  { src: paramedic, label: "Paramedic Team" },
  { src: hero, label: "Emergency Response" },
];

function Gallery() {
  return (
    <Layout>
      <PageHero eyebrow="Gallery" title="Inside our operations." subtitle="A look at our fleet, equipment and team — keeping Jangaon safe, every hour." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {photos.map((p) => (
            <figure key={p.label} className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={p.src} alt={p.label} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
              <figcaption className="border-t border-border bg-card px-4 py-3 text-sm font-medium">{p.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
