import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Sri Venkateshwara Medical Gas Agency Jangaon" },
    { name: "description", content: "Call 97000 41231 or visit us in Jangaon, Telangana for ambulance, oxygen and medical gas services." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <PageHero eyebrow="Contact" title="We're here, 24 hours a day." subtitle="Call us for emergencies, refills, bookings or queries — anytime." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <a href="tel:+919700041231" className="flex items-center gap-4 rounded-2xl bg-emergency-gradient p-6 text-emergency-foreground shadow-emergency">
              <Phone className="h-8 w-8" />
              <div>
                <div className="text-xs uppercase tracking-widest opacity-90">Emergency Hotline</div>
                <div className="font-display text-2xl font-extrabold">+91 97000 41231</div>
              </div>
            </a>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-4"><MapPin className="h-6 w-6 text-medical" /><div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="font-semibold">Jangaon, Telangana, India</div>
                <div className="text-sm text-muted-foreground">Serving Jangaon district & surrounding towns.</div>
              </div></div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-4"><Clock className="h-6 w-6 text-medical" /><div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <div className="font-semibold">Open 24 / 7 — including holidays</div>
              </div></div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-4"><Mail className="h-6 w-6 text-medical" /><div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <a className="font-semibold hover:underline" href="mailto:contact@srivenkateshwara.in">contact@srivenkateshwara.in</a>
              </div></div>
            </div>
          </div>

          <form className="rounded-3xl border border-border bg-card p-8 shadow-soft" onSubmit={(e)=>{e.preventDefault(); alert("Thank you! We'll call you back shortly.");}}>
            <h2 className="font-display text-2xl font-extrabold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Or just call directly — fastest way to reach us.</p>
            <div className="mt-6 grid gap-4">
              <input required placeholder="Your name" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <input required type="tel" placeholder="Phone number" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <select className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                <option>Ambulance Service</option>
                <option>Medical Gas / Oxygen</option>
                <option>Freezer Box</option>
                <option>Other</option>
              </select>
              <textarea rows={4} placeholder="Message" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Request Callback</button>
            </div>
          </form>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Jangaon map"
            src="https://www.google.com/maps?q=Jangaon,Telangana&output=embed"
            className="h-[400px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
