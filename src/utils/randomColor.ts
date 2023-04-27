export function randomColor(seed: string): string {
  const colors = [
    '#1DA1F1',
    '#165BEA',
    '#EF00A1',
    '#f26522',
    '#FAC469',
    '#65EBE7',
  ];
  const index = Math.floor(Math.abs(hashCode(seed)) % colors.length);
  return colors[index];
}

// 문자열 해시코드를 반환하는 함수
function hashCode(str: string): number {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
