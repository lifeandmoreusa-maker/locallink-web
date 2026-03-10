import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 text-center text-gray-500">
        <strong className="block text-gray-800 text-lg mb-4 font-bold">인카금융서비스(주) 제이어스</strong>
        <p className="text-sm leading-relaxed mb-6">
          고객과 로컬 전문가를 연결하는 신뢰 기반 매칭 플랫폼<br />
          대표번호 1588-0000
        </p>
        <p className="text-xs text-gray-400">
          © 인카금융서비스(주) 제이어스. 모든 권리 보유.
        </p>


      </div>
    </footer>
  );
};

export default Footer;
