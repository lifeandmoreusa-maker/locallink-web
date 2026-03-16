import React from 'react';

const Hero = ({ onOpenForm }) => {
  return (
    <section className="relative w-full md:h-[100dvh] min-h-screen md:min-h-[600px] flex flex-col md:block bg-black overflow-hidden">
      {/* 배경 영상 영역 */}
      <div className="relative md:absolute md:inset-0 z-0 w-full aspect-video md:aspect-none md:h-full bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-contain md:object-cover object-center opacity-100"
        >
          <source src="/video/서포터즈 변경.mp4" type="video/mp4" />
        </video>
        {/* 데스크탑에서만 보이는 가독성용 오버레이 */}
        <div className="hidden md:block absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 py-12 md:py-0 w-full max-w-4xl mx-auto md:absolute md:inset-0">
        <p className="text-white/90 text-lg md:text-2xl font-medium mb-4 animate-fade-in-up">
          전문가와 이웃을 잇는 가장 따뜻한 방법,
        </p>
        
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 md:mb-10 drop-shadow-lg leading-tight">
          인카 서포터즈(N잡러)
        </h2>

        <button 
          onClick={onOpenForm}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 md:bg-white/20 border border-white/30 md:border-white/50 rounded-full hover:bg-white/30 backdrop-blur-sm transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            인카 서포터즈 신청하기
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" className="transform group-hover:translate-x-1 transition-transform">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.52302 20.9056C-0.17434 20.2083 -0.17434 19.0776 0.52302 18.3802L8.18896 10.7143L0.52302 3.04842C-0.17434 2.35104 -0.17434 1.2204 0.52302 0.52302C1.2204 -0.17434 2.35104 -0.17434 3.04842 0.52302L11.977 9.45162C12.6743 10.149 12.6743 11.2797 11.977 11.977L3.04842 20.9056C2.35104 21.6029 1.2204 21.6029 0.52302 20.9056Z" fill="white"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* 데스크탑 전용 Scroll Down Indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
