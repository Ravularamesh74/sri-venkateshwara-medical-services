import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import {
  Phone,
  Clock,
  Heart,
  MapPin,
  Ambulance,
  CheckCircle,
  Activity,
  Users,
} from "lucide-react";

import ambulance from "@/assets/ambulance-service.jpg";
import paramedic from "@/assets/paramedic-action.jpg";

export function AmbulancePage() {
  return (
    <Layout>
      <PageHero
        title="24/7 Ambulance Service"
        subtitle="Emergency medical transportation with trained staff and rapid response across Jangaon and nearby areas."
      />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src={ambulance}
              alt="Emergency Ambulance"
              className="rounded-3xl shadow-elevated"
            />
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-emergency">
              Emergency Response
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              Professional ambulance care when every minute matters.
            </h2>

            <p className="mt-5 text-muted-foreground">
              Our ambulance fleet is available 24 hours a day to provide rapid
              emergency response, patient transportation, and critical care
              support throughout Jangaon and surrounding regions.
            </p>

            <p className="mt-4 text-muted-foreground">
              Equipped with modern medical equipment and supported by trained
              staff, we ensure safe and timely transportation for patients in
              emergency and non-emergency situations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "24/7 Emergency Support",
                "ALS & BLS Ambulances",
                "Trained Medical Staff",
                "Quick Response Time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-medical" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+919700041231"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-emergency px-8 py-4 font-bold text-white shadow-emergency transition hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call 97000 41231
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-emergency">
              Our Services
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              Complete ambulance solutions
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Ambulance,
                title: "Emergency Ambulance",
                desc: "Immediate response for accidents and emergencies.",
              },
              {
                icon: Activity,
                title: "ALS Ambulance",
                desc: "Advanced Life Support with critical care equipment.",
              },
              {
                icon: Heart,
                title: "BLS Ambulance",
                desc: "Basic Life Support for patient transportation.",
              },
              {
                icon: Users,
                title: "Patient Transfer",
                desc: "Safe hospital-to-hospital transfers.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border bg-card p-8 shadow-soft"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emergency-gradient">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-medical">
              Why Choose Us
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              Trusted emergency transport services
            </h2>

            <ul className="mt-8 space-y-5">
              {[
                "Experienced and trained ambulance staff",
                "Modern life-support medical equipment",
                "Fast response throughout Jangaon",
                "Affordable and transparent pricing",
                "Available 24 hours, every day",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-medical" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={paramedic}
              alt="Paramedic Team"
              className="rounded-3xl shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl bg-emergency-gradient p-10 text-white md:p-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold md:text-5xl">
                  Need an ambulance now?
                </h2>

                <p className="mt-4 text-white/90">
                  Our emergency team is ready to assist you 24/7.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Jangaon, Telangana
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Available 24 Hours
                </div>
              </div>

              <a
                href="tel:+919700041231"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-emergency shadow-elevated transition hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                97000 41231
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}