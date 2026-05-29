import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Check } from "lucide-react";
import medGas from "@/assets/medical-gas.jpg";
import nitrous from "@/assets/nitrous-cylinders.jpg";
import co2 from "@/assets/co2-cylinders.jpg";
import access from "@/assets/oxygen-accessories.jpg";

export const Route = createFileRoute("/medical-gas")({
  head: () => ({ meta: [
    { title: "Medical Gas Agency in Jangaon — Sri Venkateshwara" },
    { name: "description", content: "Medical oxygen, nitrous oxide, CO2 cylinders, regulators and masks in Jangaon. Doorstep refill available." },
  ]}),
  component: MedicalGas,
});

const products = [
  { img: medGas, title: "Oxygen Cylinders", desc: "Medical-grade O2 cylinders in all standard sizes — D, E, F, G, jumbo." },
  { img: nitrous, title: "Nitrous Oxide (N2O)", desc: "High-purity N2O cylinders for hospital and dental use." },
  { img: co2, title: "Carbon Dioxide", desc: "Industrial and medical CO2 cylinders, fully tested and refillable." },
  { img: access, title: "Regulators & Masks", desc: "Oxygen regulators, flow meters, masks and nasal cannulas." },
];

function MedicalGas() {
  return (
    <Layout>
      <PageHero eyebrow="Medical Gas Agency" title="Certified medical gas. Delivered when you need it." subtitle="Sri Venkateshwara is a licensed supplier of medical and industrial gases serving Jangaon and surrounding districts." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-3xl bg-secondary/60 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Why choose our medical gas supply?</h2>
            <p className="mt-3 text-muted-foreground">All cylinders are tested, certified and traceable. We follow strict safety protocols for storage, transport and refilling.</p>
          </div>
          <ul className="grid gap-3">
            {["IS-7285 certified cylinders","Hydrostatic-tested every 5 years","Tamper-proof seals","Doorstep delivery in Jangaon","Bulk supply for hospitals & clinics","24/7 emergency refill"].map((f) => (
              <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-medical" /><span>{f}</span></li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl bg-emergency-gradient p-10 text-emergency-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-extrabold">Need a cylinder refill now?</h3>
              <p className="opacity-90">We deliver across Jangaon — call us anytime.</p>
            </div>
            <a href="tel:+919700041231" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-emergency"><Phone className="h-5 w-5" />97000 41231</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
