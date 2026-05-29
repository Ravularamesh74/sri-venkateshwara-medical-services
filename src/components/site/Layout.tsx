import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current =
        window.scrollY /
        (document.documentElement.scrollHeight -
          window.innerHeight);

      setProgress(current * 100);
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Scroll Progress */}
      <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      {/* Back To Top */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-24
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-slate-900
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-110
          "
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}