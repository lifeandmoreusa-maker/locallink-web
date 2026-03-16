import React from 'react';

const InfoCards = () => {
  const points = [
    {
      badge: '포인트 1',
      badgeClass: 'bg-gray-500 text-white',
      bgClass: 'bg-gray-100',
      text: '직장인, 자영업자, 주부, 프리랜서까지\n직업에 상관없이 누구나',
      textClass: 'text-gray-800'
    },
    {
      badge: '포인트 2',
      badgeClass: 'bg-secondary text-white',
      bgClass: 'bg-blue-50',
      text: '초기 비용 ZERO\n부담없이 시작하는\n로컬 서포터즈 활동',
      textClass: 'text-gray-800'
    },
    {
      badge: '포인트 3',
      badgeClass: 'bg-white text-primary',
      bgClass: 'bg-primary',
      text: '경험이 부족해도 괜찮아요\n1:1 파트너 지원을 위한\n전문가 매칭',
      textClass: 'text-white'
    },
    {
      badge: '포인트 4',
      badgeClass: 'bg-success text-white',
      bgClass: 'bg-green-50',
      text: '투명한 수익 공유 배분 시스템\n노력한 만큼 확실한 보상',
      textClass: 'text-gray-800'
    }
  ];


  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary block mb-2">언제, 어디서든, 누구나</span>
            <span className="text-gray-800">원하는 시간에 자유롭게 활동해요.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 ${point.bgClass}`}
            >
              <div className="mb-6">
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${point.badgeClass}`}>
                  {point.badge}
                </span>
              </div>
              <p className={`text-lg font-bold leading-relaxed whitespace-pre-line mt-auto ${point.textClass}`}>
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 w-full max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
            * 활동 분야별 소요시간 및 개인별 수익은 차이가 있을 수 있습니다.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InfoCards;
