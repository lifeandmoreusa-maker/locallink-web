import React from 'react';

const Reviews = () => {
  const reviews = [
    { name: '김*희 로컬전문가', text: '자투리 시간 활용으로\n', highlight: '월평균 150만원', afterText: '\n추가 수익을 얻어요.' },
    { name: '송*영 로컬전문가', text: '퇴근 후 혹은 주말\n', highlight: '원하는 시간에 자유롭게!', afterText: '\n충분합니다.' },
    { name: '황*설 로컬전문가', text: '내 특기를 살려서\n', highlight: '이웃에게 도움을 주니', afterText: '\n정말 뿌듯해요' },
    { name: '최*현 로컬전문가', text: '월급 말고도 추가 수익이\n', highlight: '투명한 수익 공유', afterText: '라서\n믿고 활동합니다.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary block mb-2">신뢰가 증명하는 리뷰</span>
            <span className="text-gray-800">다음은 여러분의 차례입니다.</span>
          </h2>
        </div>

        {/* CSS Grid Slider Alternative for smooth React experience */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x p-4 max-w-7xl mx-auto hide-scrollbar">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="min-w-[300px] md:min-w-[350px] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 snap-center"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-primary font-bold text-xl mr-4 shadow-sm border border-blue-50">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <div className="flex text-yellow-400 text-sm mt-1">
                    {'★★★★★'}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line bg-gray-50 p-6 rounded-xl border border-gray-100">
                {review.text}
                <span className="text-primary font-bold text-xl">{review.highlight}</span>
                {review.afterText}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center font-bold text-secondary hover:text-primary transition-colors">
            더 많은 후기보기 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
