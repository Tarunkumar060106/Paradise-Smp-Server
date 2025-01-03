import React from 'react';
import { Menu, X, TreePine } from 'lucide-react';
import { NavLink } from './NavLink';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#home', text: 'Home' },
    { href: '#features', text: 'Features' },
    { href: '#gallery', text: 'Gallery' },
    { href: 'http://in1.phenoixhost.link:26033/', text: 'Map', external: true },
    { href: 'https://discord.gg/tydcHQZHFn', text: 'Discord', external: true },
    { href: '#join', text: 'Join Server', isButton: true }
  ];

  return (
    <nav className="bg-gray-900/95 fixed w-full z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-8 w-8 border-2 border-violet-800 rounded-full"
              src="https://cdn.discordapp.com/attachments/1321765821940240386/1321812919142580224/3cf2abe5-29f9-402e-8721-fd659beae9b8.webp?ex=677925b6&amp;is=6777d436&amp;hm=42f10116e1b1b4189ecc8e5783934aedb6d311954623b64149db6eb0879cf661"
            />
            <span className="ml-2 text-xl font-bold text-white">Paradise Earth SMP</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isButton={item.isButton}
                  external={item.external}
                >
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                isButton={item.isButton}
                external={item.external}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}