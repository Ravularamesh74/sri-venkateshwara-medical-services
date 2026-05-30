import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import {
  Wind,
  Ambulance,
  Snowflake,
  ShieldCheck,
  CheckCircle,
  Phone,
  Clock,
  HeartPulse,
} from "lucide-react";

import medicalGas from "@/assets/medical-gas.jpg";
import oxygen from "@/assets/oxygen-service.jpg";
import freezer from "@/assets/freezer-box.jpg";
import ambulance from "@/assets/ambulance-service.jpg";

export function ServicesPage() {
  const services = [
    {
      title: "Medical Gas Agency",
      icon: Wind,
      image: medicalGas,
      description:
        "Reliable supply of medical-grade oxygen, nitrous oxide, carbon dioxide cylinders, regulators, flow meters and accessories for hospitals, clinics and home care.",
      features: [
        "Medical Oxygen Cylinders",
        "Nitrous Oxide Supply",
        "CO₂ Cylinders",
        "Regulators & Accessories",
      ],
    },
    {
      title: "Oxygen Service",
      icon: HeartPulse,
      image: oxygen,
      description:
        "Home oxygen support solutions including oxygen cylinders, concentrators, refills and emergency oxygen delivery services.",
      features: [
        "Home Oxygen Supply",
        "Oxygen Concentrators",
        "Cylinder Refills",
        "Emergency Delivery",
      ],
    },
    {
      title: "Ambulance Service",
      icon: Ambulance,
      image: ambulance,
      description:
        "24/7 emergency ambulance services with trained staff and rapid response throughout Jangaon and surrounding areas.",
      features: [
        "Emergency Ambulance",
        "Patient Transport",
        "ALS & BLS Support",
        "24/7 Availability",
      ],
    },
    {
      title: "Freezer Box Service",
      icon: Snowflake,
      image: freezer,
      description:
        "Well-maintained freezer boxes for preserving deceased loved ones with prompt delivery and setup services.",
      features: [
        "Doorstep Delivery",
        "Immediate Setup",
        "24/7 Availability",
        "Affordable Pricing",
      ],
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Complete medical support solutions available 24 hours a day, 7 days a week."
      />

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-medical">
            What We Offer
          </div>

          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
            Healthcare support you can trust
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            We provide dependable medical gas, oxygen, ambulance and freezer
            box services to families, hospitals and healthcare facilities
            throughout Jangaon and nearby regions.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-elevated"
                />
              </div>

              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-medical-gradient">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-display text-3xl font-extrabold">
                  {service.title}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5 text-medical" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-medical">
              Why Choose Us
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              Trusted by families and healthcare providers
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Clock,
                title: "24/7 Service",
                desc: "Always available when emergencies happen.",
              },
              {
                icon: ShieldCheck,
                title: "Certified Equipment",
                desc: "Quality-tested medical products and equipment.",
              },
              {
                icon: Ambulance,
                title: "Fast Response",
                desc: "Quick dispatch and reliable service delivery.",
              },
              {
                icon: HeartPulse,
                title: "Patient Focused",
                desc: "Compassionate support for every situation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-card p-8 text-center shadow-soft"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-medical-gradient">
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="overflow-hidden rounded-3xl bg-emergency-gradient p-10 text-white md:p-16">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">
              Need Medical Assistance?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Whether you need oxygen, ambulance support, medical gas supply,
              or freezer box services, we're available 24 hours a day.
            </p>

            <a
              href="tel:+919700041231"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-emergency shadow-elevated transition hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              Call 97000 41231
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 