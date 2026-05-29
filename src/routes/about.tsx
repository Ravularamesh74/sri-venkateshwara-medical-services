import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Award,
  Heart,
  Users,
  Target,
  ShieldCheck,
  Ambulance,
  Clock3,
  ArrowRight,
} from "lucide-react";

import paramedic from "@/assets/paramedic-action.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About — Sri Venkateshwara Medical Gas Agency",
      },
      {
        name: "description",
        content:
          "Founded by Aleti Raju in Jangaon, Sri Venkateshwara delivers trusted ambulance, oxygen and medical gas services.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every patient is treated with urgency, dignity and genuine care.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    desc: "Licensed equipment, verified ambulances and trained professionals.",
  },
  {
    icon: Users,
    title: "Community Focused",
    desc: "Supporting families and healthcare providers across the region.",
  },
  {
    icon: Clock3,
    title: "Always Available",
    desc: "24/7 emergency support when every minute matters.",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Started Medical Oxygen Supply",
  },
  {
    year: "2014",
    title: "Expanded Services Across Jangaon",
  },
  {
    year: "2018",
    title: "Added Emergency Ambulance Fleet",
  },
  {
    year: "2021",
    title: "COVID Emergency Response Support",
  },
  {
    year: "2025",
    title: "Trusted Regional Healthcare Partner",
  },
];

function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={paramedic}
          alt="Medical team"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl">
              Founded by Aleti Raju
            </div>

            <h1 className="mt-8 font-display text-5xl font-black leading-tight text-white md:text-8xl">
              Saving Lives
              <span className="block text-red-500">
                Since Day One
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
              Sri Venkateshwara Medical Gas Agency provides trusted ambulance,
              oxygen and emergency healthcare support services across Jangaon
              and surrounding regions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
                Emergency Contact
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { value: "10K+", label: "Lives Served" },
            { value: "15+", label: "Years Experience" },
            { value: "24/7", label: "Emergency Support" },
            { value: "500+", label: "Healthcare Partners" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-border bg-card p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl font-black text-red-600">
                {item.value}
              </div>

              <div className="mt-3 text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <img
              src={paramedic}
              alt="Our Story"
              className="rounded-3xl shadow-2xl"
            />

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Our Story
              </span>

              <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">
                Built on Trust. Driven by Service.
              </h2>

              <p className="mt-6 text-lg text-muted-foreground">
                What started as a small oxygen cylinder service has evolved into
                one of the most trusted healthcare support providers in the
                region.
              </p>

              <p className="mt-4 text-muted-foreground">
                Today our ambulances, oxygen concentrators and medical gas
                services support families, clinics and hospitals throughout the
                district.
              </p>

              <blockquote className="mt-8 border-l-4 border-red-600 pl-6 text-xl italic">
                “We measure success not in numbers, but in lives reached on
                time.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Journey
          </span>

          <h2 className="mt-3 font-display text-4xl font-black">
            Our Milestones
          </h2>
        </div>

        <div className="mt-16 border-l-2 border-red-600 pl-10">
          {timeline.map((item) => (
            <div key={item.year} className="relative mb-12">
              <div className="absolute -left-[49px] h-5 w-5 rounded-full bg-red-600" />

              <div className="font-black text-red-600">
                {item.year}
              </div>

              <h3 className="mt-2 text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="text-sm uppercase tracking-widest text-red-500">
              Core Values
            </span>

            <h2 className="mt-3 font-display text-4xl font-black">
              What We Stand For
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40"
              >
                <item.icon className="h-12 w-12 text-red-500" />

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-xl">
            <Target className="h-12 w-12 text-red-600" />

            <h3 className="mt-6 text-3xl font-black">
              Our Mission
            </h3>

            <p className="mt-4 text-muted-foreground">
              To provide reliable, affordable and rapid emergency healthcare
              support that ensures every patient receives help when it matters
              most.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-10 shadow-xl">
            <Award className="h-12 w-12 text-red-600" />

            <h3 className="mt-6 text-3xl font-black">
              Our Vision
            </h3>

            <p className="mt-4 text-muted-foreground">
              To become Telangana's most trusted healthcare support network by
              combining compassion, innovation and operational excellence.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}