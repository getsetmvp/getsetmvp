import { FOOTER, SITE_CONFIG } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-white border-t border-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left side - Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold">{FOOTER.name}</div>
            <div className="text-sm mt-1">{SITE_CONFIG.tagline}</div>
          </div>
          
          {/* Right side - Links and copyright */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-6 text-sm mb-2">
              <a href="#" className="hover:opacity-70 transition-opacity cursor-pointer">{FOOTER.links.privacy}</a>
              <a href="#" className="hover:opacity-70 transition-opacity cursor-pointer">{FOOTER.links.terms}</a>
              <a href="#" className="hover:opacity-70 transition-opacity cursor-pointer">{FOOTER.links.contact}</a>
            </div>
            <div className="text-xs text-gray-500">
              © {currentYear} {FOOTER.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
