import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Clock, Heart, ShieldCheck, MapPin } from "lucide-react";
import ambulance from "@/assets/ambulance-service.jpg";
import paramedic from "@/assets/paramedic-action.jpg";

export const Route = createFileRoute("/ambulance")({
  head: () => ({ meta: [
    { title: "24/7 Ambulance Service Jangaon — Sri Venkateshwara" },
    { name: "description", content: "ALS, BLS and patient transport ambulances in Jangaon. 24/7 emergency dispatch. Call 97000 41231." },
  ]}),
  component: Amb,
});

const types = [
  { title: "Basic Life Support (BLS)", desc: "Oxygen, suction, defibrillator and trained EMT for stable patients.", price: "Starts ₹1,500" },
  { title: "Advanced Life Support (ALS)", desc: "Cardiac monitor, ventilator, IV equipment and paramedic team.", price: "Starts ₹3,500" },
  { title: "Patient Transport", desc: "Comfortable non-emergency transfer between home and hospital.", price: "Starts ₹1,000" },
  { title: "Dead Body Transport", desc: "Hygienic, dignified transfer with freezer box if required.", price: "On request" },
];

function Amb() {
  return (
    <Layout>
      <PageHero eyebrow="Ambulance Service" title="Reach the hospital. Fast, safe, equipped." subtitle="Round-the-clock ambulance dispatch across Jangaon and nearby districts — with trained crew and full medical equipment onboard." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={ambulance} alt="Ambulance" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elevated" />
          <div>
            <h2 className="font-display text-3xl font-extrabold">Every ambulance, fully ready.</h2>
            <p className="mt-3 text-muted-foreground">Oxygen, monitors, stretcher, suction, first-aid and a trained crew — standard in every vehicle. Dispatched within 10–15 minutes anywhere in Jangaon.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { i: Clock, t: "15 min avg response" },
                { i: Heart, t: "Trained paramedics" },
                { i: ShieldCheck, t: "Govt. certified" },
                { i: MapPin, t: "Statewide coverage" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-sm">
                  <b.i className="h-5 w-5 text-medical" />{b.t}
                </div>
              ))}
            </div>
            <a href="tel:+919700041231" className="mt-7 inline-flex items-center gap-2 rounded-full bg-emergency px-6 py-3 font-bold text-emergency-foreground shadow-emergency animate-pulse-ring"><Phone className="h-5 w-5" />Book Ambulance Now</a>
          </div>
        </div>

        <h2 className="mt-20 font-display text-3xl font-extrabold">Types of ambulance available</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated">
              <h3 className="font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-4 text-sm font-semibold text-primary">{t.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Trained crew. Real care.</h2>
            <p className="mt-3 text-muted-foreground">Our paramedics are trained in BLS, ACLS and first response. We don't just drive you — we treat you on the way.</p>
          </div>
          <img src={paramedic} alt="Paramedics" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elevated" />
        </div>
      </section>
    </Layout>
  );
}
