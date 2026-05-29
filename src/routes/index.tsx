import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, MapPin, Ambulance, Wind, Snowflake, ShieldCheck, Clock, Award, Check } from "lucide-react";
import hero from "@/assets/hero-ambulance.jpg";
import medGas from "@/assets/medical-gas.jpg";
import oxygen from "@/assets/oxygen-service.jpg";
import freezer from "@/assets/freezer-box.jpg";
import ambulance from "@/assets/ambulance-service.jpg";
import paramedic from "@/assets/paramedic-action.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Venkateshwara Medical Gas Agency — Jangaon | 24/7" },
      { name: "description", content: "Trusted medical gas, ambulance, oxygen and freezer box services in Jangaon. Call 97000 41231 — 24/7 emergency." },
    ],
  }),
  component: Home,
});

const services = [
  { to: "/medical-gas", icon: Wind, title: "Medical Gas Agency", desc: "Oxygen, N2O, CO2 cylinders with regulators, masks & accessories.", img: medGas },
  { to: "/ambulance", icon: Ambulance, title: "Ambulance Service", desc: "ALS, BLS & patient transport vehicles ready 24/7.", img: ambulance },
  { to: "/services", icon: Wind, title: "Oxygen Service", desc: "Home oxygen concentrators, cylinders & refills on demand.", img: oxygen },
  { to: "/services", icon: Snowflake, title: "Freezer Box Service", desc: "Dead body freezer boxes delivered to your location.", img: freezer },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Emergency ambulance" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-emergency/70" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-24 md:grid-cols-2 md:py-32">
          <div className="text-primary-foreground">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-emergency animate-pulse-ring">
              <span className="h-2 w-2 rounded-full bg-white" /> 24 × 7 Emergency
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Lives saved <span className="text-accent">in minutes,</span> not hours.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
              Sri Venkateshwara Medical Gas Agency — Jangaon's most trusted partner for medical oxygen, ambulance, and freezer box services. One call, complete care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919700041231" className="inline-flex items-center gap-2 rounded-full bg-emergency px-6 py-3 font-semibold text-emergency-foreground shadow-emergency hover:scale-105 transition">
                <Phone className="h-5 w-5" /> Call 97000 41231
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:bg-white/20">
                Our Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              {[
                { icon: Clock, t: "24/7 Available" },
                { icon: ShieldCheck, t: "Licensed & Certified" },
                { icon: Award, t: "Trusted Since Years" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-2 text-primary-foreground/90">
                  <b.icon className="h-4 w-4 text-accent" /> {b.t}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
        {/* stats bar */}
        <div className="relative">
          <div className="mx-auto -mb-12 max-w-6xl px-4">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-elevated md:grid-cols-4">
              {[
                { v: "10K+", l: "Lives Served" },
                { v: "24/7", l: "Always Open" },
                { v: "15min", l: "Response" },
                { v: "100%", l: "Trusted" },
              ].map((s) => (
                <div key={s.l} className="bg-card p-6 text-center">
                  <div className="font-display text-3xl font-extrabold text-primary md:text-4xl">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 pt-28 pb-16">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-medical">What we offer</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">Complete medical support, under one roof.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-medical-gradient text-medical-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-3 text-sm font-semibold text-primary group-hover:underline">Learn more →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img src={paramedic} alt="Paramedics" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elevated" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-emergency p-5 text-emergency-foreground shadow-emergency md:block">
              <div className="font-display text-3xl font-extrabold">15+</div>
              <div className="text-xs uppercase tracking-widest">Years of Service</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-medical">About us</div>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
              When every second counts, Jangaon trusts us.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Founded by Aleti Raju, Sri Venkateshwara Medical Gas Agency has been serving Jangaon and surrounding areas with reliable medical gas, emergency ambulance, oxygen and freezer box services. Our team is trained, our equipment is certified, and our promise is uncompromising — round the clock.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Certified medical-grade cylinders","Quick 15-minute dispatch","Trained paramedic staff","Affordable, transparent pricing"].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-medical" />{p}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">More about us</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="overflow-hidden rounded-3xl bg-emergency-gradient p-10 text-emergency-foreground md:p-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-5xl">Emergency? We're one call away.</h2>
              <p className="mt-3 max-w-xl text-emergency-foreground/90">Available 24 hours, 7 days. Ambulance, oxygen and medical gas anywhere in Jangaon.</p>
              <div className="mt-3 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" /> Jangaon, Telangana</div>
            </div>
            <a href="tel:+919700041231" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-emergency shadow-elevated hover:scale-105 transition">
              <Phone className="h-6 w-6" /> 97000 41231
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
