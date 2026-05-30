import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Ambulance,
  MessageCircle,
} from "lucide-react";

export function ContactPage() {
  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Available 24 hours a day for emergency ambulance, oxygen and medical gas services."
      />

      {/* CONTACT INFO */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-medical">
              Get In Touch
            </div>

            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">
              We're here whenever you need us.
            </h2>

            <p className="mt-5 text-muted-foreground">
              Whether you need emergency ambulance transportation,
              medical oxygen supply, freezer box services, or medical
              gas support, our team is ready to help 24/7.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emergency-gradient">
                  <Phone className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <a
                    href="tel:+919700041231"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 97000 41231
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-gradient">
                  <MapPin className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">
                    Jangaon, Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-gradient">
                  <Clock className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-muted-foreground">
                    24 Hours × 7 Days Emergency Service
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-gradient">
                  <Mail className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:contact@srivenkateshwara.in"
                    className="text-muted-foreground hover:text-primary"
                  >
                    contact@srivenkateshwara.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border bg-card p-8 shadow-elevated">
            <h3 className="font-display text-2xl font-bold">
              Emergency Contact
            </h3>

            <p className="mt-3 text-muted-foreground">
              Need immediate assistance? Contact our emergency response
              team directly.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+919700041231"
                className="flex items-center justify-center gap-3 rounded-2xl bg-emergency px-6 py-4 font-bold text-white shadow-emergency transition hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                Call 97000 41231
              </a>

              <a
                href="https://wa.me/919700041231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border bg-background px-6 py-4 font-semibold transition hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 rounded-2xl bg-secondary p-6">
              <div className="flex items-center gap-3">
                <Ambulance className="h-8 w-8 text-emergency" />
                <div>
                  <h4 className="font-bold">24/7 Ambulance Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Rapid emergency transportation across Jangaon and
                    nearby areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-secondary p-6">
              <h4 className="font-bold">Services Available</h4>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Medical Oxygen Supply</li>
                <li>• Ambulance Service</li>
                <li>• Freezer Box Service</li>
                <li>• Medical Gas Agency</li>
                <li>• Home Oxygen Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl bg-emergency-gradient p-10 text-white md:p-16">
            <div className="text-center">
              <h2 className="font-display text-3xl font-extrabold md:text-5xl">
                Need Emergency Assistance?
              </h2>

              <p className="mt-4 text-white/90">
                Our team is available 24/7 to respond to your needs.
              </p>

              <a
                href="tel:+919700041231"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-emergency shadow-elevated transition hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                Call Now: 97000 41231
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}