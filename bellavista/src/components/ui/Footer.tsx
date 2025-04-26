import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1209] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo section */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-serif mr-1">BELLAVISTA</div>
              <span className="text-2xl">🌴</span>
            </Link>
          </div>

          {/* Footer links - first column */}
          <div className="mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/history"
                  className="hover:text-amber-300 transition-colors"
                >
                  Depuis 1923
                </Link>
              </li>
              <li>
                <Link
                  href="/magazine"
                  className="hover:text-amber-300 transition-colors"
                >
                  Le Magazine
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-amber-300 transition-colors"
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
                  className="hover:text-amber-300 transition-colors"
                >
                  E-Brochure
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-amber-300 transition-colors"
                >
                  Galerie vidéos
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className="hover:text-amber-300 transition-colors"
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
                  className="hover:text-amber-300 transition-colors"
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-amber-300 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-300 transition-colors"
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
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-amber-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/club"
                  className="hover:text-amber-300 transition-colors"
                >
                  Leaders Club
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Hotel Bellavista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
