import { Header } from "./Header";
import { Footer } from "./Footer";
import { Phone } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="tel:+919700041231"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emergency text-emergency-foreground shadow-emergency animate-pulse-ring md:hidden"
        aria-label="Call now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
