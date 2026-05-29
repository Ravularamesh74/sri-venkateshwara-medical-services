import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Ambulance, Wind, Snowflake, Phone, ArrowRight } from "lucide-react";
import medGas from "@/assets/medical-gas.jpg";
import ambulance from "@/assets/ambulance-service.jpg";
import oxygen from "@/assets/oxygen-service.jpg";
import freezer from "@/assets/freezer-box.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Our Services — Sri Venkateshwara Medical Gas Agency" },
    { name: "description", content: "Medical gas agency, 24/7 ambulance, home oxygen and freezer box services in Jangaon." },
  ]}),
  component: Services,
});

const items = [
  { to: "/medical-gas", icon: Wind, title: "Medical Gas Agency", img: medGas,
    desc: "Full range of medical-grade gas cylinders — oxygen, nitrous oxide, carbon dioxide — with regulators, masks and refilling.",
    features: ["Oxygen cylinders (all sizes)","Nitrous oxide (N2O)","CO2 cylinders","Regulators & masks","Doorstep refill"] },
  { to: "/ambulance", icon: Ambulance, title: "Ambulance Service", img: ambulance,
    desc: "ALS, BLS and patient transport ambulances ready around the clock with trained paramedics and oxygen onboard.",
    features: ["Advanced Life Support","Basic Life Support","Dead body transport","Inter-city transfer","24/7 dispatch"] },
  { to: "/services", icon: Wind, title: "Oxygen Service", img: oxygen,
    desc: "Home oxygen concentrators and cylinder rentals with mask, regulator and tubing — installation included.",
    features: ["5L / 10L concentrators","Oxygen cylinder rental","Refills on demand","Free installation","Maintenance support"] },
  { to: "/services", icon: Snowflake, title: "Freezer Box Service", img: freezer,
    desc: "Stainless-steel mortuary freezer boxes for body preservation, delivered and installed at home or hospital.",
    features: ["Single & double units","Hygienic stainless steel","Quick delivery","Power-efficient","Operator support"] },
];

function Services() {
  return (
    <Layout>
      <PageHero eyebrow="Our Services" title="Complete medical support for Jangaon." subtitle="Four core services — one trusted name. Available 24/7 anywhere across Jangaon and nearby towns." />
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        {items.map((s, i) => (
          <div key={s.title} className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-3xl shadow-elevated">
              <img src={s.img} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-medical-gradient text-medical-foreground"><s.icon className="h-6 w-6" /></div>
              <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-medical" />{f}</li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="tel:+919700041231" className="inline-flex items-center gap-2 rounded-full bg-emergency px-5 py-2.5 text-sm font-semibold text-emergency-foreground shadow-emergency"><Phone className="h-4 w-4" />Call Now</a>
                {s.to !== "/services" && <Link to={s.to} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary">Details <ArrowRight className="h-4 w-4" /></Link>}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
