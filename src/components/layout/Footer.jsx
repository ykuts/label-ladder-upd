import Link from 'next/link';
import Image from 'next/image';
import { trackEmailClick } from '../../lib/gtag';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">

        {/* Desktop Layout: 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">

          {/* Column 1: Logo + Text */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Label Ladder Logo"
                width={160}
                height={35}
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-accent text-sm leading-relaxed">
              We provide end-to-end data processing and annotation services to transform your data into a powerful asset.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-accent hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-accent hover:text-white transition text-sm">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="text-accent hover:text-white transition text-sm">
                  Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/general-services" className="text-accent hover:text-white transition text-sm">
                  General Data Annotation
                </Link>
              </li>
              <li>
                <Link href="/expert-services" className="text-accent hover:text-white transition text-sm">
                  Expert & Specialist Annotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-accent text-sm">
                  <span className="font-medium text-white">Email:</span><br />
                  <a href="mailto:hello@labelladder.com" className="hover:text-white transition" onClick={trackEmailClick}>
                    hello@labelladder.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-accent text-sm">
                  <span className="font-medium text-white">Website:</span><br />
                  <a href="https://www.labelladder.com" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                    www.labelladder.com
                  </a>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Following your scheme */}
        <div className="md:hidden space-y-6">

          {/* Row 1: Logo + Text (side by side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo-white.png"
                  alt="Label Ladder Logo"
                  width={160}
                  height={35}
                  className="w-32 h-auto"
                />
              </Link>
            </div>
            <div>
              <p className="text-accent text-sm leading-relaxed">
                We provide end-to-end data processing and annotation services to transform your data into a powerful asset.
              </p>
            </div>
          </div>

          {/* Row 2: Quick Links + Services (side by side) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-accent hover:text-white transition text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/approach" className="text-accent hover:text-white transition text-sm">
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="/credentials" className="text-accent hover:text-white transition text-sm">
                    Credentials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/general-services" className="text-accent hover:text-white transition text-sm">
                    General Data Annotation
                  </Link>
                </li>
                <li>
                  <Link href="/expert-services" className="text-accent hover:text-white transition text-sm">
                    Expert & Specialist Annotation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3: Contact (full width) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Contact</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-accent text-sm">
                  <span className="font-medium text-white">Email:</span><br />
                  <a href="mailto:hello@labelladder.com" className="hover:text-white transition">
                    hello@labelladder.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-accent text-sm">
                  <span className="font-medium text-white">Website:</span><br />
                  <a href="https://www.labelladder.com" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                    www.labelladder.com
                  </a>
                </p>
              </div>
            </div>

            {/* CTA Button + Social */}
            <div className="flex items-center justify-between">
              <Link
                href="/contact"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Start Your Project
              </Link>

              <a href="https://linkedin.com/company/labelladder" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition mr-10">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-accent/30 text-center text-sm text-accent">
          <p className='p-footer'>&copy; {currentYear} Label Ladder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;