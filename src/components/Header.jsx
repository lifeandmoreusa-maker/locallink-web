import React, { useState } from 'react';

const Header = ({ onOpenForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-3"
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* 로고 */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo_incar.png" alt="인카 제이어스 로고" className="h-10 md:h-12 object-contain" />
          </a>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {['인카 제이어스', '블로그', '스토리', '이벤트', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-medium hover:text-secondary transition-colors text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일 메뉴 토글 */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="block w-6 h-0.5 transition-colors bg-gray-800"></span>
            <span className="block w-6 h-0.5 transition-colors bg-gray-800"></span>
            <span className="block w-6 h-0.5 transition-colors bg-gray-800"></span>
          </button>

        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* 모바일 메뉴 패널 */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <span className="font-bold text-xl text-primary">인카 제이어스</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">&times;</button>
        </div>
        <ul className="p-6 flex flex-col gap-6">
          {['인카 제이어스', '블로그', '스토리', '이벤트', 'FAQ'].map((item) => (
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
