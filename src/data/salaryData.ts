export interface CareerData {
  year: string;
  index: number; // 2016년 연봉을 100으로 뒀을 때의 수치
  event: string;
}

// 실제 연봉 금액은 코드 어디에도 남기지 않습니다.
// 계산식: (해당년도 연봉 / 2016년 연봉) * 100
export const careerHistory: CareerData[] = [
  { year: '2016', index: 100, event: '신입 입사 (기준)' },   // 기준점
  { year: '2017', index: 114.3, event: '초반 인상' },
  { year: '2018', index: 128.6, event: '대리 진급' },
  { year: '2019', index: 142.9, event: '정기 인상' },
  { year: '2020', index: 153.6, event: '연봉 조정' },
  { year: '2021', index: 164.3, event: '안정기' },
  { year: '2022', index: 214.3, event: '1차 점프업' },
  { year: '2023', index: 292.9, event: '최고점 달성' },     // 약 2.9배 성장
  { year: '2024', index: 210.7, event: '이직 및 조정' },    // 시장 상황 반영
  { year: '2025', index: 228.6, event: '재도약 시작' },     // 반등 성공
];