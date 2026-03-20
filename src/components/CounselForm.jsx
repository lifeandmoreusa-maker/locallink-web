import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SIGUNGU_MAP = {
  서울: ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
  경기: ['수원시','성남시','의정부시','안양시','부천시','광명시','평택시','동두천시','안산시','고양시','과천시','구리시','남양주시','오산시','시흥시','군포시','의왕시','하남시','용인시','파주시','이천시','안성시','김포시','화성시','광주시','양주시','포천시','여주시','연천군','가평군','양평군'],
  인천: ['중구','동구','미추홀구','연수구','남동구','부평구','계양구','서구','강화군','옹진군'],
  부산: ['중구','서구','동구','영도구','부산진구','동래구','남구','북구','해운대구','사하구','금정구','강서구','연제구','수영구','사상구','기장군'],
  대구: ['중구','동구','서구','남구','북구','수성구','달서구','달성군','군위군'],
  광주: ['동구','서구','남구','북구','광산구'],
  대전: ['동구','중구','서구','유성구','대덕구'],
  울산: ['중구','남구','동구','북구','울주군'],
  세종: ['세종시'],
  강원: ['춘천시','원주시','강릉시','동해시','태백시','속초시','삼척시','홍천군','횡성군','영월군','평창군','정선군','철원군','화천군','양구군','인제군','고성군','양양군'],
  충북: ['청주시','충주시','제천시','보은군','옥천군','영동군','증평군','진천군','괴산군','음성군','단양군'],
  충남: ['천안시','공주시','보령시','아산시','서산시','논산시','계룡시','당진시','금산군','부여군','서천군','청양군','홍성군','예산군','태안군'],
  전북: ['전주시','군산시','익산시','정읍시','남원시','김제시','완주군','진안군','무주군','장수군','임실군','순창군','고창군','부안군'],
  전남: ['목포시','여수시','순천시','나주시','광양시','담양군','곡성군','구례군','고흥군','보성군','화순군','장흥군','강진군','해남군','영암군','무안군','함평군','영광군','장성군','완도군','진도군','신안군'],
  경북: ['포항시','경주시','김천시','안동시','구미시','영주시','영천시','상주시','문경시','경산시','군위군','의성군','청송군','영양군','영덕군','청도군','고령군','성주군','칠곡군','예천군','봉화군','울진군','울릉군'],
  경남: ['창원시','진주시','통영시','사천시','김해시','밀양시','거제시','양산시','의령군','함안군','창녕군','고성군','남해군','하동군','산청군','함양군','거창군','합천군'],
  제주: ['제주시','서귀포시'],
};

/* ──────────────────────────────────────────
   작은 재사용 컴포넌트
────────────────────────────────────────── */

const SelectField = ({ children, ...props }) => (
  <div className="relative flex-1">
    <select
      {...props}
      className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-gray-50
                 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20
                 focus:border-primary appearance-none text-gray-700 transition-all"
    >
      {children}
    </select>
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  </div>
);

const AgreeRadio = ({ name, value, onChange }) => (
  <div className="flex gap-5 mt-2">
    {[
      { id: `${name}_yes`, label: '동의함',        val: true  },
      { id: `${name}_no`,  label: '동의하지 않음',  val: false },
    ].map(({ id, label, val }) => (
      <label key={id} className="flex items-center gap-2 cursor-pointer select-none">
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            name={name}
            className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded-full
                       checked:border-primary checked:bg-primary transition-all"
            checked={value === val}
            onChange={() => onChange(val)}
          />
          <span className="absolute w-2 h-2 rounded-full bg-white opacity-0
                           peer-checked:opacity-100 pointer-events-none" />
        </div>
        <span className="text-sm text-gray-700 font-medium">{label}</span>
      </label>
    ))}
  </div>
);

const PrivacyAccordion = ({ label, checked, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                           ${checked ? 'bg-primary border-primary' : 'border-gray-300 bg-white'}`}>
            {checked && (
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <span className="text-sm font-semibold text-gray-800 text-left">{label}</span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="px-4 py-4 text-xs text-gray-500 space-y-3 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

/* ──────────────────────────────────────────
   메인 컴포넌트
────────────────────────────────────────── */
const CounselForm = ({ isOpen, onClose }) => {
  const [name,          setName]          = useState('');
  const [phone,         setPhone]         = useState('');
  const [sido,          setSido]          = useState('');
  const [sigungu,       setSigungu]       = useState('');

  const handleSidoChange = e => { setSido(e.target.value); setSigungu(''); };
  const [specialty,     setSpecialty]     = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [ageGroup,      setAgeGroup]      = useState('');

  const [collectAgree, setCollectAgree] = useState(false);
  const [marketAgree,  setMarketAgree]  = useState(false);
  const [adAgree,      setAdAgree]      = useState(false);
  const secondChecked = marketAgree && adAgree;

  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitErr,  setSubmitErr]  = useState('');

  const handleSubmit = async () => {
    if (!name.trim())    return alert('이름을 입력해주세요.');
    if (!phone.trim())   return alert('휴대전화를 입력해주세요.');
    if (!sido)           return alert('시/도를 선택해주세요.');
    if (!specialty)      return alert('전문 분야를 선택해주세요.');
    if (!availableTime)  return alert('상담가능시간을 선택해주세요.');
    if (!ageGroup)       return alert('연령대를 선택해주세요.');
    if (!collectAgree)   return alert('개인신용정보 동의서(필수)에 동의해주세요.');

    setSubmitting(true);
    setSubmitErr('');
    try {
      await addDoc(collection(db, 'applications'), {
        name, phone, sido, sigungu, specialty,
        availableTime, ageGroup,
        collectAgree, marketAgree, adAgree,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitErr('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setName(''); setPhone(''); setSido(''); setSigungu('');
    setSpecialty(''); setAvailableTime(''); setAgeGroup('');
    setCollectAgree(false); setMarketAgree(false); setAdAgree(false);
    setSubmitErr('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* modal shell — full-screen fixed, flex centering */}
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none">
        <div
          className="w-full md:max-w-lg bg-white rounded-t-3xl md:rounded-3xl
                     shadow-2xl flex flex-col pointer-events-auto"
          style={{ maxHeight: '90dvh' }}
          onClick={e => e.stopPropagation()}
        >

          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0">
            <h3 className="text-xl font-bold text-primary">인카 파트너스 등록 상담 신청</h3>
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center
                         justify-center transition-colors focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── 제출 완료 화면 ── */}
          {submitted ? (
            <div className="p-10 flex flex-col items-center justify-center text-center flex-grow">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">신청 완료!</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                신청해주셔서 감사합니다.<br />
                빠른 시간 내에 연락드리겠습니다.
              </p>
              <button onClick={handleClose} className="btn-primary px-10 py-3 text-base">
                닫기
              </button>
            </div>
          ) : (
            <>
              {/* Form Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
                <div className="mb-6">
                  <p className="text-sm text-gray-500 font-medium">빠른 상담 및 매칭을 위해</p>
                  <h4 className="text-2xl font-bold text-gray-800 mt-1">최소한의 정보만 받고 있어요</h4>
                </div>

                <form className="space-y-5">
                  {/* 이름 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">이름</label>
                    <input
                      type="text"
                      placeholder="예) 홍길동"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                                 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20
                                 focus:border-primary transition-all"
                    />
                  </div>

                  {/* 휴대전화 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">휴대전화</label>
                    <input
                      type="tel"
                      placeholder="-를 제외한 번호만 입력해주세요"
                      maxLength="11"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                                 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20
                                 focus:border-primary transition-all"
                    />
                  </div>

                  {/* 거주/활동 지역 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">거주/활동 지역</label>
                    <div className="flex gap-3">
                      <SelectField value={sido} onChange={handleSidoChange}>
                        <option value="" disabled>시/도</option>
                        {Object.keys(SIGUNGU_MAP).map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </SelectField>
                      <SelectField value={sigungu} onChange={e => setSigungu(e.target.value)} disabled={!sido}>
                        <option value="" disabled>시/군/구</option>
                        {(SIGUNGU_MAP[sido] || []).map(g => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </SelectField>
                    </div>
                  </div>

                  {/* 전문 분야 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">전문 분야 (직업군)</label>
                    <SelectField value={specialty} onChange={e => setSpecialty(e.target.value)}>
                      <option value="" disabled>전문 분야를 선택해주세요</option>
                      <option value="01">인테리어/시공</option>
                      <option value="02">청소/생활가사</option>
                      <option value="03">교육/과외/컨설팅</option>
                      <option value="04">돌봄/케어 서비스</option>
                      <option value="05">기타 전문직</option>
                    </SelectField>
                  </div>

                  {/* 상담가능시간 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">상담가능시간</label>
                    <SelectField value={availableTime} onChange={e => setAvailableTime(e.target.value)}>
                      <option value="" disabled>시간을 선택해주세요</option>
                      <option value="am">[오전]이 좋아요</option>
                      <option value="pm">[오후]가 좋아요</option>
                    </SelectField>
                  </div>

                  {/* 연령대 */}
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">연령대</label>
                    <SelectField value={ageGroup} onChange={e => setAgeGroup(e.target.value)}>
                      <option value="" disabled>25세 이상부터 신청 가능합니다</option>
                      <option value="10s">10대</option>
                      <option value="20s">20대</option>
                      <option value="30s">30대</option>
                      <option value="40s">40대</option>
                      <option value="50s">50대</option>
                      <option value="60up">60세 이상</option>
                    </SelectField>
                  </div>

                  {/* ── 약관 ── */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    {/* 전체 동의 */}
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl
                                      hover:bg-gray-50 transition-colors">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="peer w-6 h-6 appearance-none border-2 border-gray-300 rounded-md
                                     checked:bg-primary checked:border-primary transition-all"
                          checked={collectAgree && secondChecked}
                          onChange={e => {
                            const v = e.target.checked;
                            setCollectAgree(v); setMarketAgree(v); setAdAgree(v);
                          }}
                        />
                        <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100
                                        pointer-events-none"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="3"
                             strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-800">약관에 전체 동의합니다</span>
                    </label>
                    <p className="text-xs text-gray-400 px-3 -mt-2">
                      ※ 전체 동의 시 선택 동의도 포함되며, 개별 선택도 가능합니다.
                    </p>

                    {/* 첫 번째 약관 */}
                    <PrivacyAccordion label="채용상담을 위한 개인신용정보 동의서 (필수)" checked={collectAgree}>
                      <p className="text-gray-600 text-xs">
                        * 본 동의서는 인카 파트너스가 개인정보처리자로서 수집 · 이용합니다.
                      </p>
                      <hr className="border-gray-200" />
                      <div>
                        <h4 className="font-bold text-gray-700 text-xs mb-1">1. 수집 · 이용에 관한 사항</h4>
                        <p className="font-semibold text-gray-600 text-xs mt-2">수집 · 이용목적</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          인카 파트너스 채용 상담 진행 및 관련 안내 제공<br />
                          인카 파트너스에 대한 채용 정보 및 지원 방법 등 안내 제공<br />
                          상담 후 추가적인 지원 안내 및 관련 서비스에 대한 안내 제공
                        </p>
                        <p className="font-semibold text-gray-600 text-xs mt-2">보유 및 이용기간</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          보유기간은 동의일로부터 1년이며 이후에는 지체없이 파기됩니다.
                        </p>
                        <p className="font-semibold text-gray-600 text-xs mt-2">거부 권리 및 불이익</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          귀하는 아래 개인(신용)정보 수집,이용에 관한 동의를 거부하실 수 있습니다.<br />
                          동의 거부 시 불이익은 없으나 인카 파트너스의 채용상담 서비스는 제공되지 않습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700 text-xs mb-1">2. 수집 · 이용항목</h4>
                        <div className="rounded-lg border border-gray-200 p-3 text-gray-400 text-xs leading-relaxed">
                          <p className="font-semibold text-gray-500">개인(신용) 정보</p>
                          <p>- 일반 개인정보 : 성명, 거주지, 연령대, 전화번호, 상담 가능시간, 직업</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-red-500 text-xs font-semibold">위 개인정보를 수집/이용 하는 것에 동의합니다.</p>
                        <AgreeRadio name="collect_info" value={collectAgree} onChange={setCollectAgree} />
                      </div>
                    </PrivacyAccordion>

                    {/* 두 번째 약관 */}
                    <PrivacyAccordion label="채용마케팅 활용을 위한 개인정보 동의 (선택)" checked={secondChecked}>
                      <p className="text-gray-600 text-xs">
                        * 본 동의서는 인카 파트너스가 개인정보처리자로서 수집·이용합니다.
                      </p>
                      <hr className="border-gray-200" />
                      <div>
                        <h4 className="font-bold text-gray-700 text-xs mb-1">1. 수집 · 이용에 관한 사항</h4>
                        <p className="font-semibold text-gray-600 text-xs mt-2">개인정보의 수집 및 이용 목적</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          '인카 파트너스' 채용 서비스 관련 정보 제공 및 안내<br />
                          채용 이벤트 및 프로모션 안내<br />
                          채용 시장 조사 및 서비스 품질 향상
                        </p>
                        <p className="font-semibold text-gray-600 text-xs mt-2">수집·이용 항목</p>
                        <p className="text-gray-400 text-xs">성명, 거주지, 연령대, 성별, 전화번호, 직업</p>
                        <p className="font-semibold text-gray-600 text-xs mt-2">개인정보의 보유 및 이용 기간</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          본 동의서에 따라 수집된 개인정보는 수집일로부터 1년 간 보관되며,<br />
                          목적 달성 후 안전하게 폐기됩니다.
                        </p>
                        <p className="font-semibold text-gray-600 text-xs mt-2">동의 거부 권리 및 불이익</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          귀하는 본 동의를 거부하실 수 있으며, 거부하신 경우에도 '인카 파트너스' 서비스 이용에는 제한이 없습니다.<br />
                          다만, 마케팅 정보 제공 등 부가 혜택 안내가 제한될 수 있습니다.
                        </p>
                      </div>
                      <div>
                        <p className="text-red-500 text-xs font-semibold">위 개인정보를 수집/이용 하는 것에 동의합니다.</p>
                        <AgreeRadio name="survey_privacy" value={marketAgree} onChange={setMarketAgree} />
                      </div>
                      <div>
                        <p className="text-red-500 text-xs font-semibold">
                          채용 마케팅 광고성 정보(전화/문자/카카오톡/이메일) 수신에 동의합니다.
                        </p>
                        <AgreeRadio name="survey_ad" value={adAgree} onChange={setAdAgree} />
                      </div>
                    </PrivacyAccordion>
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-white sm:rounded-b-3xl flex-shrink-0">
                {submitErr && <p className="text-red-500 text-sm text-center mb-3">{submitErr}</p>}
                <p className="text-center text-gray-800 font-semibold text-sm leading-relaxed mb-4">
                  거의 완료되었어요 !<br />
                  신청 완료하면 주인공 될 준비 끝!
                </p>
                <button
                  type="button"
                  className="w-full btn-primary text-xl py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? '저장 중...' : '신청 완료하기'}
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </>
  );
};

export default CounselForm;
