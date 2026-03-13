import React from 'react';

const Hero = ({ onOpenForm }) => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* 배경 영상 영역 */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center opacity-100"
        >
          <source src="/video/자막수정.mp4" type="video/mp4" />
        </video>
        {/* 영상 위에 텍스트 가독성을 위한 아주 옅은 어두운 오버레이 추가 (필요 시) */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      
      {/* 컨텐츠 */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-white/90 text-lg md:text-2xl font-medium mb-4 animate-fade-in-up">
          전문가와 이웃을 잇는 가장 따뜻한 방법,
        </p>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 drop-shadow-lg">
          인카 제이어스
        </h2>

        
        <button 
          onClick={onOpenForm}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/20 border border-white/50 rounded-full hover:bg-white/30 backdrop-blur-sm transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            전문가 파트너 신청하기
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" className="transform group-hover:translate-x-1 transition-transform">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.52302 20.9056C-0.17434 20.2083 -0.17434 19.0776 0.52302 18.3802L8.18896 10.7143L0.52302 3.04842C-0.17434 2.35104 -0.17434 1.2204 0.52302 0.52302C1.2204 -0.17434 2.35104 -0.17434 3.04842 0.52302L11.977 9.45162C12.6743 10.149 12.6743 11.2797 11.977 11.977L3.04842 20.9056C2.35104 21.6029 1.2204 21.6029 0.52302 20.9056Z" fill="white"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
