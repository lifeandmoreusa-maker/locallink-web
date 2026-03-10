import React from 'react';

const Statistics = () => {
  const stats = [
    {
      title: '인카 제이어스 전문가 매칭 최초 누적 파트너스',

      value: '1만 명 돌파',
      note: '*최근 기준',
      bgClass: 'bg-blue-50 border-blue-200',
      titleClass: 'text-primary',
      valueClass: 'text-blue-900'
    },
    {
      title: '신뢰 기반 누적 매칭 건수',
      value: '50만 건+',
      note: '*오픈 이후 누적 매칭 기준',
      bgClass: 'bg-green-50 border-green-200',
      titleClass: 'text-success',
      valueClass: 'text-green-900'
    },
    {
      title: '로컬 전문가 월평균 추가 수익',
      value: '150만원',
      note: '*전문 분야별, 활동별 개인차가 있을 수 있습니다.',
      bgClass: 'bg-blue-50 border-blue-200',
      titleClass: 'text-primary',
      valueClass: 'text-blue-900'
    },
    {
      title: '총 누적 수익 공유액',
      value: '190억+',
      note: '*이웃과 함께 달성한 성과입니다.',
      bgClass: 'bg-green-50 border-green-200',
      titleClass: 'text-success',
      valueClass: 'text-green-900'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            압도적인 숫자로<br />증명합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border ${stat.bgClass} flex flex-col justify-center items-center text-center transform transition-transform hover:-translate-y-2 hover:shadow-xl duration-300`}
            >
              <div className="mb-4">
                <p className={`font-medium mb-2 ${stat.titleClass}`}>{stat.title}</p>
                <h3 className={`text-4xl font-bold tracking-tight ${stat.valueClass}`}>{stat.value}</h3>
              </div>
              <span className="text-xs text-gray-500 mt-auto">{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
