import React from 'react';

const Features = () => {
  const cards = [
    {
      title: '시간 부자',
      desc: '원하는 시간에\n자유롭게 일해요',
      icon: '⏰'
    },
    {
      title: '친구 부자',
      desc: '이웃과 소통하며\n신뢰를 쌓아요',
      icon: '🤝'
    },
    {
      title: '건강 부자',
      desc: '가치있고 활기찬 활동으로\n몸과 마음을 건강하게',
      icon: '💪'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Growth Intro */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            서포터즈를 넘어 전문가로,<br />
            인카 서포터즈는 다릅니다.
          </h2>

          <div className="inline-block px-6 py-2 bg-secondary text-white text-2xl font-bold rounded-full shadow-md">
            서포터즈 지원 및 성장 SYSTEM
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-20 max-w-5xl mx-auto"></div>

        {/* 3 Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary block mb-2">인카 서포터즈</span>
            <span className="text-gray-800">3가지 '부자'를 지향합니다.</span>
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-primary/10 rounded-2xl p-10 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-primary/30 group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-gray-600 font-medium whitespace-pre-line leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 bg-white inline-block px-4 py-2 rounded-full shadow-sm border border-gray-100">
            * 서포터즈는 '홍익인간'의 핵심 가치를 공유합니다.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
