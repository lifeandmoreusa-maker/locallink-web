import React from 'react';

const CounselForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-center md:items-center py-4 px-2 sm:px-4 pointer-events-none h-full sm:h-auto overflow-y-auto w-full mx-auto">
        <div className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl relative pointer-events-auto flex flex-col max-h-[90vh]">
          
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0">
            <h3 className="text-xl font-bold text-primary">로컬 전문가 등록 상담 신청</h3>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
            <div className="mb-6">
              <p className="text-sm text-gray-500 font-medium">빠른 상담 및 매칭을 위해</p>
              <h4 className="text-2xl font-bold text-gray-800 mt-1">최소한의 정보만 받고 있어요</h4>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">이름</label>
                <input 
                  type="text" 
                  placeholder="예) 홍길동"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">휴대전화</label>
                <input 
                  type="tel" 
                  placeholder="-를 제외한 번호만 입력해주세요"
                  maxLength="11"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">거주/활동 지역</label>
                <div className="flex gap-3">
                  <select className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none text-gray-700">
                    <option value="">시/도</option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                  </select>
                  <select className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none text-gray-700">
                    <option value="">시/군/구</option>
                  </select>
                </div>
              </div>

              {/* Job / Specialty */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">전문 분야 (직업군)</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none text-gray-700">
                  <option value="" disabled selected>전문 분야를 선택해주세요</option>
                  <option value="01">인테리어/시공</option>
                  <option value="02">청소/생활가사</option>
                  <option value="03">교육/과외/컨설팅</option>
                  <option value="04">돌봄/케어 서비스</option>
                  <option value="05">기타 전문직</option>
                </select>
              </div>

              {/* Terms */}
              <div className="pt-4 border-t border-gray-100 mt-6">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer w-6 h-6 appearance-none border-2 border-gray-300 rounded-md checked:bg-primary checked:border-primary transition-all" />
                    <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-bold text-gray-800">약관에 전체 동의합니다</span>
                </label>
                
                <div className="mt-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100 h-28 overflow-y-auto ml-2 custom-scrollbar">
                  <p className="font-bold mb-2 text-gray-700">전문가 파트너 상담 및 등록을 위한 개인정보 동의서 (필수)</p>
                  <p className="mb-2">* 본 동의서는 제이어스가 개인정보처리자로서 수집 · 이용합니다.</p>
                  <strong className="block text-gray-700 mt-2">1. 수집 · 이용목적</strong>
                  <p>제이어스 로컬링크 전문가 파트너 상담 진행 및 지역 매칭 안내</p>
                  <strong className="block text-gray-700 mt-2">2. 수집 · 이용항목</strong>
                  <p>- 성명, 지역, 연락처, 전문분야 등</p>
                </div>
              </div>
            </form>
          </div>
          
          {/* Footer Action */}
          <div className="p-6 border-t border-gray-100 bg-white sm:rounded-b-3xl flex-shrink-0">
            <button 
              type="button" 
              className="w-full btn-primary text-xl py-4"
              onClick={() => alert("신청이 완료 테스트!")}
            >
              신청 및 매칭 상담하기
            </button>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  );
};

export default CounselForm;
