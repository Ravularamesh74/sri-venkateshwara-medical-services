import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Award, Heart, Users, Target } from "lucide-react";
import paramedic from "@/assets/paramedic-action.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Sri Venkateshwara Medical Gas Agency" },
    { name: "description", content: "Founded by Aleti Raju in Jangaon, Sri Venkateshwara delivers trusted medical gas, ambulance and oxygen services." },
  ]}),
  component: About,
});

const values = [
  { i: Heart, t: "Compassion First", d: "Every patient is family. We act with care, not just speed." },
  { i: Award, t: "Certified Quality", d: "Licensed cylinders, certified ambulances, trained staff." },
  { i: Users, t: "Community Driven", d: "Serving Jangaon with affordable, accessible emergency care." },
  { i: Target, t: "Always Ready", d: "24/7 dispatch — we don't close, ever." },
];

function About() {
  return (
    <Layout>
      <PageHero eyebrow="About Us" title="Built on trust. Run by family." subtitle="Sri Venkateshwara Medical Gas Agency was founded by Aleti Raju to bring dependable medical support to Jangaon." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={paramedic} alt="Our team" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elevated" />
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Our Story</h2>
            <p className="mt-4 text-muted-foreground">What started as a single oxygen cylinder service has grown into one of Jangaon's most relied-upon medical agencies. Today, our ambulances cover the entire district, our oxygen concentrators are in homes across the region, and our freezer boxes serve families in their most difficult moments.</p>
            <p className="mt-3 text-muted-foreground">We measure success not in numbers, but in lives reached on time.</p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-medical-gradient text-medical-foreground"><v.i className="h-6 w-6" /></div>
              <h3 className="mt-4 font-display text-lg font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 rounded-3xl bg-primary p-10 text-primary-foreground md:grid-cols-3 md:p-14">
          {[{v:"10K+",l:"Lives Served"},{v:"500+",l:"Hospitals & Clinics"},{v:"15+",l:"Years of Service"}].map((s)=>(
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl font-extrabold">{s.v}</div>
              <div className="mt-1 text-sm uppercase tracking-widest opacity-80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
