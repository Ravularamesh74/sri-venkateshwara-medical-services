import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-10 w-10 rounded bg-white/10 p-1" width={40} height={40} />
            <div className="font-display text-lg font-bold">Sri Venkateshwara</div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Trusted medical gas agency, 24/7 ambulance, oxygen and freezer box services in Jangaon, Telangana.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/medical-gas" className="hover:text-accent">Medical Gas Agency</Link></li>
            <li><Link to="/ambulance" className="hover:text-accent">Ambulance Service</Link></li>
            <li><Link to="/services" className="hover:text-accent">Oxygen Service</Link></li>
            <li><Link to="/services" className="hover:text-accent">Freezer Box Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /><a href="tel:+919700041231">+91 97000 41231</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /><span>Jangaon, Telangana, India</span></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5" /><span>24 / 7 Emergency</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /><span>contact@srivenkateshwara.in</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 md:flex-row">
          <span>© {new Date().getFullYear()} Sri Venkateshwara Medical Gas Agency. All rights reserved.</span>
          <span>Proprietor: Aleti Raju</span>
        </div>
      </div>
    </footer>
  );
}