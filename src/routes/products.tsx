import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone } from "lucide-react";
import medGas from "@/assets/medical-gas.jpg";
import nitrous from "@/assets/nitrous-cylinders.jpg";
import co2 from "@/assets/co2-cylinders.jpg";
import oxygen from "@/assets/oxygen-service.jpg";
import access from "@/assets/oxygen-accessories.jpg";
import freezer from "@/assets/freezer-box.jpg";
import flowmeter from "@/assets/product-flowmeter.jpg";
import portable from "@/assets/product-portable-o2.jpg";
import nebulizer from "@/assets/product-nebulizer.jpg";
import bipap from "@/assets/product-bipap.jpg";
import suction from "@/assets/product-suction.jpg";
import stretcher from "@/assets/product-stretcher.jpg";
import oximeter from "@/assets/product-oximeter.jpg";
import wheelchair from "@/assets/product-wheelchair.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Products — Sri Venkateshwara Medical Gas Agency Jangaon" },
    { name: "description", content: "Full range of medical equipment: oxygen cylinders, concentrators, nebulizers, BiPAP, wheelchairs, freezer boxes and more in Jangaon." },
  ]}),
  component: Products,
});

const categories = [
  { name: "Medical Gas Cylinders", items: [
    { img: medGas, title: "Oxygen Cylinders", desc: "D, E, F, G & Jumbo sizes — medical grade O2." },
    { img: nitrous, title: "Nitrous Oxide (N2O)", desc: "High-purity N2O for hospital & dental use." },
    { img: co2, title: "CO2 Cylinders", desc: "Industrial & medical CO2, refillable." },
    { img: portable, title: "Portable Oxygen Kit", desc: "Trolley-mounted O2 cylinder with regulator." },
  ]},
  { name: "Oxygen & Respiratory Equipment", items: [
    { img: oxygen, title: "Oxygen Concentrator (5L / 10L)", desc: "Continuous oxygen at home, plug-and-play." },
    { img: bipap, title: "BiPAP / CPAP Machine", desc: "Sleep apnea & respiratory support device." },
    { img: nebulizer, title: "Nebulizer", desc: "Compressor nebulizer with mask & tubing." },
    { img: flowmeter, title: "Flowmeter & Humidifier", desc: "Precise O2 flow with humidifier bottle." },
    { img: access, title: "Masks, Regulators & Cannulas", desc: "Complete oxygen delivery accessories." },
    { img: suction, title: "Suction Machine", desc: "Portable medical suction unit." },
  ]},
  { name: "Hospital & Mobility Equipment", items: [
    { img: freezer, title: "Dead Body Freezer Box", desc: "Stainless steel preservation unit." },
    { img: stretcher, title: "Patient Stretcher Trolley", desc: "Stainless steel hospital stretcher." },
    { img: wheelchair, title: "Folding Wheelchair", desc: "Lightweight, easy-fold mobility chair." },
    { img: oximeter, title: "Pulse Oximeter", desc: "Fingertip SpO2 & heart rate monitor." },
  ]},
];

function Products() {
  return (
    <Layout>
      <PageHero
        eyebrow="Products Catalogue"
        title="Everything you need, on one shelf."
        subtitle="From oxygen cylinders to wheelchairs — explore our full range of medical equipment available in Jangaon."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">{cat.name}</h2>
              <div className="hidden h-px flex-1 bg-border md:block" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cat.items.map((p) => (
                <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elevated">
                  <div className="aspect-square overflow-hidden bg-secondary/40">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-bold leading-tight">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                    <a href="tel:+919700041231" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emergency hover:underline">
                      <Phone className="h-3 w-3" /> Enquire
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-3xl bg-emergency-gradient p-10 text-emergency-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-extrabold">Looking for something specific?</h3>
              <p className="opacity-90">Tell us what you need — we'll source and deliver in Jangaon.</p>
            </div>
            <a href="tel:+919700041231" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-emergency"><Phone className="h-5 w-5" />97000 41231</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
