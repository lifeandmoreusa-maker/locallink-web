import React from 'react';

const FloatingButton = ({ onOpenForm }) => {
  return (
    <div className="fixed right-4 bottom-6 md:right-8 md:bottom-10 z-40">
      <button 
        onClick={onOpenForm}
        className="group relative flex items-center justify-between gap-3 w-[180px] md:w-[220px] h-[56px] md:h-[64px] pl-2 md:pl-3 pr-4 md:pr-6 rounded-full bg-gradient-to-l from-primary to-secondary shadow-[0_4px_20px_rgba(13,110,253,0.4)] hover:shadow-[0_8px_25px_rgba(13,110,253,0.6)] transform hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-center justify-center w-[44px] md:w-[50px] h-[44px] md:h-[50px] bg-white rounded-full shadow-inner text-primary font-bold text-sm md:text-base group-hover:scale-110 transition-transform px-1">
          인카
        </div>


        <span className="text-white font-bold text-base md:text-lg flex-1 text-center whitespace-nowrap">
          서포터즈 신청하기
        </span>
      </button>
    </div>
  );
};

export default FloatingButton;
