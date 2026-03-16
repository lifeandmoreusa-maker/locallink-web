// 로고를 확보한 보험사만 포함 (총 11개)
const ROW1 = [
  { name: '한화생명', src: 'https://company.hanwhalife.com/assets/images/common/logo_ko_black.png' },
  { name: '신한라이프', src: 'https://shinhanlife.co.kr/resources/images/cdh/common/footer_sh_logo.svg' },
  { name: 'MetLife', src: 'https://www.metlife.co.kr/content/dam/metlife/kr/author/layout/header/Header-Logo-New-202111.png' },
];

const ROW2 = [
  { name: '하나생명', src: 'http://www.hanalife.co.kr/img/common/h1-logo.gif' },
  { name: 'KB손해보험', src: 'https://www.kbinsure.co.kr/images/common/comm/session_logo.gif' },
  { name: '메리츠화재', src: 'https://www.meritzfire.com/default/images/common/logo.gif' },
];

const ROW3 = [
  { name: '흥국화재', src: 'https://www.heungkukfire.co.kr/common/images/common/header/img_logo.gif' },
  { name: '하나손해보험', src: 'https://www.hanainsure.co.kr/static/resources/web/img/img_logo.png' },
  { name: 'NH농협손해보험', src: 'https://www.nhfire.co.kr/images/common/top_logo_350.png' },
];

const ROW4 = [
  { name: 'KDB생명', src: 'https://www.kdblife.co.kr/svc/images/logo_small.gif' },
  { name: 'ABL생명', src: 'http://www.abllife.co.kr/resources/images/common/kakao_bg_pc_widget_logo.png' },
];

// 무한 스크롤을 위해 각 행 아이템을 4배 복제
function makeTrack(logos) {
  return [...logos, ...logos, ...logos, ...logos];
}

function LogoRow({ logos, direction = 'left', speed = 30 }) {
  const track = makeTrack(logos);
  const animName = direction === 'left' ? 'scrollLeft' : 'scrollRight';

  return (
    <div className="overflow-hidden w-full py-3">
      <div
        className="flex gap-10 items-center w-max"
        style={{
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-white rounded-xl shadow-sm px-6 py-3 flex items-center justify-center"
            style={{ minWidth: '140px', height: '64px' }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-10 max-w-[120px] object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function SpecialReason2() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <p className="text-center text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
          인카 서포터즈 특별한 이유 2
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          35개의 회사 상품을 파는곳 <span className="text-gray-400">vs</span> 1개의 회사 상품을 파는곳
        </h2>
        <p className="text-center text-gray-500 leading-relaxed max-w-2xl mx-auto">
          고객은 백화점에 가고싶은데, 당신은 당신이 파는 '그 물건'만 사라고 강요한다면?<br />
          인카 서포터즈는 모든 보험사 상품을 비교/분석할 수 있습니다.
        </p>
      </div>

      {/* 4줄 로고 슬라이드 */}
      <div className="w-full space-y-2">
        <LogoRow logos={ROW1} direction="left"  speed={28} />
        <LogoRow logos={ROW2} direction="right" speed={32} />
        <LogoRow logos={ROW3} direction="left"  speed={26} />
        <LogoRow logos={ROW4} direction="right" speed={34} />
      </div>
    </section>
  );
}
