
const cards = [
  {
    title: '내 보험 먼저 꼼꼼하게 살펴보기',
    description: '가입한 보험이 나에게 맞는지, 보장은 충분한지\n금융 전문가와 함께 분석해 보세요.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8cK6xCr_U8_05ADFZu6ohR-soth-ONFlmli_yPV3-LuTPxT9euorEgWgYmHMy5rVgNJgayZ73zsExNtOZExOe4RnVhqgS2liJrignjKg3aQuzxrdeicwYgZOrOJdAQ7cFA9yq4t_cJmCG/s800/money_hokensyouken.png',
    alt: '보험 증서 일러스트',
  },
  {
    title: '우리 가족보험 점검하기',
    description: '부모님, 배우자, 자녀까지 온 가족의 보험을\n금융 전문가와 함께 점검해요',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3bJQhxwx4Zwy3eFZF7oiWl82XJGRguer4aAuHq9ngAsz_csFAxZMQDhmOmkV9Pjp7IOmKmzMz7t31sU26WMc-k4g75IgZFPb1Y8_0D5f-CHCZvaq8BxcMM5SPIHGhuxIjC8aI9VaeZM9N/s400/thumbnail_group_family.jpg',
    alt: '가족 일러스트',
  },
  {
    title: '주변에 저희를 알려주세요.',
    description: '소중한 사람들이 보험을 점검하고, 더 나은\n선택을 하도록 금융 전문가를\n소개해주세요',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpL6ExStn7guf96fZAWMqCPvR5p3iZuoMEXjtWCxE6hAEv2jWu26YuglUr_giXiuis2uPZMK4rwx_xzNWrrsMDMK5xaoutOPRcBjb8-krPEJ1CQEU7g-_xRwezvQ20lufpmUsScZpkadY/s400/friends_man.png',
    alt: '친구들 일러스트',
  },
];

export default function NJobCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          인카 서포터즈(N잡러) 부업 <span className="text-primary">3가지만 기억하세요.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:bg-blue-50 hover:shadow-xl cursor-default"
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
