export default function convertDateFormat(dateString: string): string {
  const date = new Date(dateString);

  // 월의 이름을 영문으로 변환
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = monthNames[date.getMonth()];

  // 변환된 날짜 문자열 생성
  const result = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;

  return result;
}
