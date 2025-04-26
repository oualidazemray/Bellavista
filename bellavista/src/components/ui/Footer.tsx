import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="  text-white darke:text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo section */}
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/bellavistaIcon.png"
                alt="Bellavista Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Footer links - first column */}
          <div className="mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/history"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Depuis 1923
                </Link>
              </li>
              <li>
                <Link
                  href="/magazine"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Le Magazine
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Presse
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer links - second column */}
          <div className="mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/brochure"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  E-Brochure
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Galerie vidéos
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Galerie photos
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer links - third column */}
          <div className="mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/careers"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer links - fourth column */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/club"
                  className="hover:text-amber-300 transition-colors dark:hover:text-amber-400"
                >
                  Leaders Club
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 text-center text-sm text-white/60 dark:text-white/80">
          <p>
            © {new Date().getFullYear()} Hotel Bellavista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
