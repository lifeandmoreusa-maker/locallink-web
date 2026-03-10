import React from 'react';

const Steps = () => {
  const steps = [
    { number: '1', label: '1분 파트너 신청' },
    { number: '2', label: '전문 분야 프로필 등록' },
    { number: '3', label: '인카 제이어스 신뢰 인증' },
    { number: '4', label: '지역매칭 & 수익 창출' },
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary block mb-2">쉽고 간편한 전문가 신청 방법</span>
            <span className="text-gray-800">온라인 프로필 등록부터 수익 창출까지</span>
          </h2>
        </div>

        {/* Simplified Grid instead of Swiper for better React integration without extra deps yet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Optional App. Connector Line (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200 z-0"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-blue-50">
                <div className="w-24 h-24 rounded-full bg-blue-50 text-secondary flex items-center justify-center text-4xl font-bold mb-6 shadow-inner group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="text-secondary mr-2">{step.number}.</span> 
                  {step.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;
