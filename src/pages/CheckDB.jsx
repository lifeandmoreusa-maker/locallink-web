import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin1234';

const SPECIALTY_MAP = {
  '01': '인테리어/시공',
  '02': '청소/생활가사',
  '03': '교육/과외/컨설팅',
  '04': '돌봄/케어 서비스',
  '05': '기타 전문직',
};
const TIME_MAP   = { am: '[오전]이 좋아요', pm: '[오후]가 좋아요' };
const AGE_MAP    = { '10s': '10대', '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대', '60up': '60세 이상' };

export default function CheckDB() {
  const [authed,    setAuthed]    = useState(false);
  const [pwInput,   setPwInput]   = useState('');
  const [pwError,   setPwError]   = useState(false);
  const [rows,      setRows]      = useState([]);
  const [loading,   setLoading]   = useState(false);
  const [fetchErr,  setFetchErr]  = useState('');

  const handleLogin = () => {
    if (pwInput === ADMIN_PASSWORD) {
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  useEffect(() => {
    if (!authed) return;
    (async () => {
      setLoading(true);
      try {
        const q    = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        setRows(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        setFetchErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [authed]);

  /* ── 비밀번호 화면 ── */
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
          <h1 className="text-xl font-bold text-gray-800 mb-1">관리자 페이지</h1>
          <p className="text-sm text-gray-400 mb-6">접근하려면 비밀번호를 입력하세요.</p>
          <input
            type="password"
            placeholder="비밀번호"
            value={pwInput}
            onChange={e => { setPwInput(e.target.value); setPwError(false); }}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className={`w-full px-4 py-3 rounded-xl border ${pwError ? 'border-red-400' : 'border-gray-200'} bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 mb-2`}
          />
          {pwError && <p className="text-xs text-red-500 mb-3">비밀번호가 올바르지 않습니다.</p>}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors mt-1"
          >
            입장
          </button>
        </div>
      </div>
    );
  }

  /* ── 관리자 테이블 ── */
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">신청 현황</h1>
            <p className="text-sm text-gray-400 mt-1">총 {rows.length}건</p>
          </div>
          <button
            onClick={() => setAuthed(false)}
            className="px-4 py-2 rounded-xl text-sm text-gray-500 border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            로그아웃
          </button>
        </div>

        {loading && <p className="text-gray-400 text-center py-20">불러오는 중...</p>}
        {fetchErr && <p className="text-red-500 text-center py-20">오류: {fetchErr}</p>}

        {!loading && !fetchErr && rows.length === 0 && (
          <p className="text-gray-400 text-center py-20">아직 신청 내역이 없습니다.</p>
        )}

        {!loading && rows.length > 0 && (
          <div className="overflow-x-auto rounded-2xl shadow">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  {['#', '이름', '전화번호', '시/도', '시/군/구', '전문분야', '상담시간', '연령대', '필수동의', '선택동의', '신청일시'].map(h => (
                    <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.name}</td>
                    <td className="px-4 py-3 text-gray-600">{r.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{r.sido}</td>
                    <td className="px-4 py-3 text-gray-600">{r.sigungu || '-'}</td>
                    <td className="px-4 py-3 text-gray-600">{SPECIALTY_MAP[r.specialty] || r.specialty}</td>
                    <td className="px-4 py-3 text-gray-600">{TIME_MAP[r.availableTime] || r.availableTime}</td>
                    <td className="px-4 py-3 text-gray-600">{AGE_MAP[r.ageGroup] || r.ageGroup}</td>
                    <td className="px-4 py-3 text-center">
                      {r.collectAgree
                        ? <span className="text-green-600 font-bold">동의</span>
                        : <span className="text-red-400">미동의</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {r.marketAgree && r.adAgree
                        ? <span className="text-green-600 font-bold">동의</span>
                        : <span className="text-gray-400">-</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {r.createdAt?.toDate
                        ? r.createdAt.toDate().toLocaleString('ko-KR')
                        : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
