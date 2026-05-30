import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import {
  Award,
  Heart,
  Users,
  Target,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";
import paramedic from "@/assets/paramedic-action.jpg";

export function AboutPage() {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Serving Jangaon with trusted medical gas, ambulance, oxygen and emergency support services."
      />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src={paramedic}
              alt="Paramedic team"
              className="rounded-3xl shadow-elevated"
            />
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-medical">
              Our Story
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              Caring for the community when every second matters.
            </h2>

            <p className="mt-5 text-muted-foreground">
              Sri Venkateshwara Medical Gas Agency was founded with a simple
              mission: to provide reliable emergency healthcare support to
              families, hospitals, clinics, and patients across Jangaon and
              surrounding areas.
            </p>

            <p className="mt-4 text-muted-foreground">
              Under the leadership of <strong>Aleti Raju</strong>, we have
              built a reputation for quick response times, dependable service,
              certified medical equipment, and compassionate care.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Medical Oxygen Supply",
                "24/7 Ambulance Service",
                "Freezer Box Service",
                "Certified Equipment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-medical" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Award,
                value: "15+",
                label: "Years Experience",
              },
              {
                icon: Heart,
                value: "10K+",
                label: "Lives Supported",
              },
              {
                icon: Clock,
                value: "24/7",
                label: "Emergency Service",
              },
              {
                icon: Users,
                value: "100%",
                label: "Customer Trust",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-card p-8 text-center shadow-soft"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-medical-gradient">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>

                <div className="font-display text-4xl font-extrabold text-primary">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border bg-card p-8 shadow-soft">
            <Target className="mb-4 h-10 w-10 text-medical" />

            <h3 className="font-display text-2xl font-bold">
              Our Mission
            </h3>

            <p className="mt-4 text-muted-foreground">
              To provide fast, dependable, and affordable emergency healthcare
              support services while maintaining the highest standards of
              safety, professionalism, and patient care.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8 shadow-soft">
            <ShieldCheck className="mb-4 h-10 w-10 text-medical" />

            <h3 className="font-display text-2xl font-bold">
              Our Vision
            </h3>

            <p className="mt-4 text-muted-foreground">
              To become the most trusted emergency medical support provider in
              Telangana by continuously improving service quality, response
              times, and community healthcare accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-medical">
              Core Values
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              What drives us every day
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Compassion",
                desc: "Every patient deserves care, dignity, and support.",
              },
              {
                title: "Reliability",
                desc: "We respond quickly and deliver dependable services.",
              },
              {
                title: "Safety",
                desc: "Certified equipment and trained professionals always.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border bg-card p-8 text-center shadow-soft"
              >
                <h3 className="font-display text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}