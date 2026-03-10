import React, { useState, useEffect } from 'react';

const Header = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {/* <img src="/placeholder_logo.png" alt="제이어스 로컬링크 로고" className="h-8" /> */}
            <span className={`font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>J-US 로컬링크</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {['제이어스 로컬링크', '블로그', '스토리', '이벤트', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 transition-colors ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-colors ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-colors ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <span className="font-bold text-xl text-primary">J-US 로컬링크</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">&times;</button>
        </div>
        <ul className="p-6 flex flex-col gap-6">
          {['제이어스 로컬링크', '블로그', '스토리', '이벤트', 'FAQ'].map((item) => (
            <li key={item}>
              <a href="#" className="text-lg font-medium text-gray-800 block" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-6 mt-auto border-t">
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onOpenForm(); }}
            className="w-full btn-primary"
          >
            파트너 신청하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
