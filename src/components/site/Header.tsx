import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/medical-gas", label: "Medical Gas" },
  { to: "/ambulance", label: "Ambulance" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="bg-emergency text-emergency-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
          <span className="font-medium tracking-wide">24/7 EMERGENCY — JANGAON, TELANGANA</span>
          <a href="tel:+919700041231" className="hidden sm:flex items-center gap-1.5 font-semibold">
            <Phone className="h-3 w-3" /> 97000 41231
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sri Venkateshwara logo" className="h-11 w-11" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold text-primary">Sri Venkateshwara</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Medical Gas Agency</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+919700041231"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-2 text-sm font-semibold text-emergency-foreground shadow-emergency animate-pulse-ring"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            className="lg:hidden rounded-md border border-border p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
