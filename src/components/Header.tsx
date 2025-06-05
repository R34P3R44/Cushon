// import { Menu, X } from 'lucide-react';
import { leftLinks, navLinks, HeaderItemType } from '../constants/headerLinks';

const Header: React.FC = () => {

  return (
    <header className="bg-headerBackground shadow-sm h-24">
      <div className="min-w-6xl w-auto mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Left Section */}

        <div className="flex items-center space-x-2">
          {leftLinks.map((item, idx) => {
            switch (item.type) {
              case HeaderItemType.Image:
                return (
                  <a key={idx} href={item.href} aria-label={item.alt}>
                    <img src={item.src} alt={item.alt} className="h-auto w-full max-w-[220px] pb-1" />
                  </a>
                );
              case HeaderItemType.Link:
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    {item.text}
                  </a>
                );
              case HeaderItemType.Button:
                return (
                  <button
                    key={idx}
                    className="text-white hover:text-gray-200 transition-colors rounded-bl-[30px"
                  >
                    {item.text}
                  </button>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Desktop Nav */}

        <nav className="hidden md:flex space-x-6 text-white font-normal">
          {navLinks.map((item, idx) => {
            switch (item.type) {
              case HeaderItemType.Link:
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {item.text}
                  </a>
                );
              case HeaderItemType.Button:
                return (
                  <button
                    key={idx}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {item.text}
                  </button>
                );
              default:
                return null;
            }
          })}
        </nav>
      </div>
    </header>);
};

export default Header;