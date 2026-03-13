const cards = [
  {
    title: '높은 수수료만 보고 들어갔다가...',
    description:
      '실적 압박에 시달려 결국 그만둔다는 이야기, 들어보셨나요? 화려한 숫자 뒤에 숨겨진 진실을 먼저 확인하세요.',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAtItpoyeNt0v8TnmDd0-5YPlYsCeUoL0SfKoiAoeTMSTjLLfnesRA8L3r1Z0KEP0zXlYKk9L7QkY2GqxXBq1LFvbJu5Qu6zgCgEQ1_RSfB3LtZIlnXkg6s_CDiAzSCH4ymWPWDq_xlG_i/s400/thumbnail_money_gen.jpg',
    alt: '돈 일러스트',
  },
  {
    title: '"내 계약부터 넣으라고요?"',
    description:
      '입사하자마자 가족 보험 압박? 본인 계약 강요? 이런 곳에서 오래 버틸 수 있을까요?',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYRmlfjBCVtwMQDD-uz2ofoj4Ps3tr06pGKKfjtXjIcRv9boESKTjGGwn5lC0FASBU3rngm_TwrdV3EDeek_sO2-JINegcxnjJtnWzOkJkV6daEXdM7L9I-OliNuBczEswG_Kvq0mLyEA/s400/business_stress_check.png',
    alt: '스트레스 일러스트',
  },
  {
    title: '사람을 소모품 취급하더라고요',
    description:
      '타사에서 넘어온 분들이 가장 많이 하는 말입니다. 당신의 가치는 그 이상입니다.',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtj8butOq7jFRQ3vDhej2gV2DOLFzVck3AOShHNNOeU0q7y965SxDjJ05UlMPtK0g3isUcT5DqUUC2UvvBhsB2mnyMJjnNZu-TREWO5l-Wx1mzqJZ34EPR572WEBfl5A57GAxAsLfd59I/s400/hair_nukege_stress.png',
    alt: '지친 직장인 일러스트',
  },
];

export default function SpecialReason1() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #eceff1 100%)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-center text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
          인카제이어스 특별한 이유 1
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          무리한 영업 강요를 하지 않습니다.
        </h2>
        <p className="text-center text-gray-500 mb-12 leading-relaxed">
          많은 분들이 화려한 광고에 끌려 시작했다가 실망하고 떠납니다. 우리는 다릅니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-28 h-28 object-contain mb-6"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
