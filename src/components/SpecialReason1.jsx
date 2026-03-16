const cards = [
  {
    title: '높은 수수료만 보고 들어갔다가...',
    description:
      '화려한 숫자 뒤에 숨겨진 진실을 먼저 확인하세요',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAtItpoyeNt0v8TnmDd0-5YPlYsCeUoL0SfKoiAoeTMSTjLLfnesRA8L3r1Z0KEP0zXlYKk9L7QkY2GqxXBq1LFvbJu5Qu6zgCgEQ1_RSfB3LtZIlnXkg6s_CDiAzSCH4ymWPWDq_xlG_i/s400/thumbnail_money_gen.jpg',
    alt: '돈 일러스트',
  },
  {
    title: '"내 계약부터 넣으라고요?"',
    description:
      '수수료 때문에 내 보험을 새로가입?\n눈앞의 수익보다, 전문가와 손익을\n따져봐야 합니다.',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYRmlfjBCVtwMQDD-uz2ofoj4Ps3tr06pGKKfjtXjIcRv9boESKTjGGwn5lC0FASBU3rngm_TwrdV3EDeek_sO2-JINegcxnjJtnWzOkJkV6daEXdM7L9I-OliNuBczEswG_Kvq0mLyEA/s400/business_stress_check.png',
    alt: '스트레스 일러스트',
  },
  {
    title: '사람을 소모품 취급하더라고요',
    description:
      '당신의 성장을 지원합니다.\n당신의 가치는 그 이상입니다.',
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
          인카서포터즈 특별한 이유 1
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          투명하게 공개하고 약속을 지킵니다.
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
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
