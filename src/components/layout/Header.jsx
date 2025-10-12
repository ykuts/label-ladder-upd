import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    {
      name: 'About Us',
      href: '/about/',
      submenu: [
        { name: 'Mission', href: '/about#mission' },
        { name: 'Meet the Team', href: '/about#team' }
      ]
    },
    { name: 'Approach', href: '/approach/' },
    {
      name: 'Services',
      href: '/services/',
      submenu: [
      { 
        name: 'Our Services', 
        href: '/services/', 
        description: 'About Our Services' 
      },
      { 
        name: 'General Data Annotation', 
        href: '/general-services/', 
        description: 'For Large-Scale Projects' 
      },
      { 
        name: 'Expert & Specialist Annotation', 
        href: '/expert-services/', 
        description: 'For Medical, etc.' 
      }
    ]
    },
    { name: 'Credentials', href: '/credentials/' },
  ];

  const handleSubmenuToggle = (name) => {
    if (isSubmenuOpen === name) {
      setIsSubmenuOpen('');
    } else {
      setIsSubmenuOpen(name);
    }
  };

  const isHomePage = router.pathname === '/';
  const headerBg = isHomePage && !isScrolled
    ? 'bg-primary'
    : 'bg-primary shadow-md';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${isScrolled ? 'py-2' : 'py-2'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative flex items-center">
          <Image
            src={isHomePage && !isScrolled ? "/images/logo.png" : "/images/logo.png"}
            alt="Label Ladder Logo"
            width={180}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navigation.map((item) => (
              <li key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    {/* Main link Services - clickable */}
                    <Link
                      href={item.href}
                      className={`text-base font-medium transition duration-300 flex items-center ${router.pathname === item.href || router.pathname.startsWith(item.href + '/')
                          ? 'text-white'
                          : 'text-white hover:text-secondary'
                        }`}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown shows on hover */}
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-gray-100 hover:text-secondary border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-medium text-primary text-sm">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition duration-300 ${router.pathname === item.href
                      ? 'text-white'
                      : 'text-white hover:text-secondary'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                className="btn btn-secondary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between transition-all duration-300 ${isOpen ? 'transform' : ''}`}>
            <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container py-6">
          <ul className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      className={`flex justify-between items-center w-full px-3 py-2 text-base font-medium ${router.pathname === item.href || router.pathname.startsWith(item.href + '/')
                        ? 'text-secondary'
                        : 'text-primary hover:text-secondary'
                        }`}
                      onClick={() => handleSubmenuToggle(item.name)}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ml-1 transition-transform ${isSubmenuOpen === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`pl-4 mt-2 space-y-2 ${isSubmenuOpen === item.name ? 'block' : 'hidden'}`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1 text-sm text-primary hover:text-secondary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${router.pathname === item.href
                      ? 'text-secondary'
                      : 'text-primary hover:text-secondary'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center btn btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;