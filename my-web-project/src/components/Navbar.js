import { useState, useEffect } from "react";

export default function TransparentNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <nav className={`
            fixed w-full z-50 transition-all duration-300
            ${scrolled ? 'bg-white bg-opacity-80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
          `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-gray-200 px-6 py-2 rounded-md text-sm font-medium">
                      Contact
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-200 px-6 py-2 rounded-md text-sm font-medium">
                      Awards
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-200 px-6 py-2 rounded-md text-sm font-medium">
                      Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    )
}