import React from 'react';

const Statistics = () => {
  const stats = [
    {
      title: '함께하는 인카 파트너',
      value: '19,000명 돌파',
      note: '',
      bgClass: 'bg-blue-50 border-blue-200',
      titleClass: 'text-primary',
      valueClass: 'text-blue-900'
    },
    {
      title: '2024년 매출',
      value: '8323억원',
      note: '',
      bgClass: 'bg-green-50 border-green-200',
      titleClass: 'text-success',
      valueClass: 'text-green-900'
    },
    {
      title: '업계 최초 사업단 재적 기네스',
      value: '1000명 돌파',
      note: '',
      bgClass: 'bg-blue-50 border-blue-200',
      titleClass: 'text-primary',
      valueClass: 'text-blue-900'
    },
    {
      title: '인카 금융 재적&업적',
      value: '1위 사업단',
      note: '',
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
