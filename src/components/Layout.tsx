import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import SEOHelmet from './SEOHelmet';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    {
      name: 'Услуги',
      href: '#',
      dropdown: [
        { name: 'Ремонт стиральных машин', href: '/remont-stiralnyh-mashin-bosch' },
        { name: 'Ремонт сушильных машин', href: '/remont-sushilnyh-mashin-bosch' },
        { name: 'Ремонт кофемашин', href: '/remont-kofemashin-bosch' },
        { name: 'Ремонт посудомоечных машин', href: '/remont-posudomoechnyh-mashin-bosch' },
      ]
    },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <>
      <SEOHelmet />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg ">
          <div className="bg-red-600 text-white py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>+7 (862) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Сочи, ул. Курортный пр., 75</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span>Режим работы: ПН-ПТ 9:00-18:00, СБ 10:00-16:00</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                    BOSCH
                  </div>
                  <span className="ml-3 text-gray-800 font-semibold">Сервисный центр Сочи</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8 items-center">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors">
                          {item.name}
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                        {isServicesDropdownOpen && (
                          <div className="absolute top-8 left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                            <div className="py-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === item.href
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-red-600 p-2"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200 py-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <div className="px-3 py-2 text-base font-medium text-gray-700">
                            {item.name}
                          </div>
                          <div className="pl-6 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-100 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            location.pathname === item.href
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                    BOSCH
                  </div>
                  <span className="ml-3 font-semibold">Сервисный центр</span>
                </div>
                <p className="text-gray-300">
                  Авторизованный сервисный центр Bosch в Сочи. Качественный ремонт бытовой техники с использованием оригинальных запчастей.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Услуги</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link to="/remont-stiralnyh-mashin-bosch" className="hover:text-white transition-colors">Ремонт стиральных машин</Link></li>
                  <li><Link to="/remont-sushilnyh-mashin-bosch" className="hover:text-white transition-colors">Ремонт сушильных машин</Link></li>
                  <li><Link to="/remont-kofemashin-bosch" className="hover:text-white transition-colors">Ремонт кофемашин</Link></li>
                  <li><Link to="/remont-posudomoechnyh-mashin-bosch" className="hover:text-white transition-colors">Ремонт посудомоечных машин</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+7 (862) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Сочи, ул. Курортный пр., 75</span>
                  </div>
                  <div>
                    <span>ПН-ПТ: 9:00-18:00</span><br />
                    <span>СБ: 10:00-16:00</span><br />
                    <span>ВС: выходной</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Сервисный центр Bosch Сочи. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;