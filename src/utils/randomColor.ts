export function randomColorBy(seed: string) {
  const colorSet = [
    { text: 'text-[#1DA1F1]', hoverText: 'hover:text-[#1DA1F1]' },
    { text: 'text-[#165BEA]', hoverText: 'hover:text-[#165BEA]' },
    { text: 'text-[#EF00A1]', hoverText: 'hover:text-[#EF00A1]' },
    { text: 'text-[#f26522]', hoverText: 'hover:text-[#f26522]' },
    { text: 'text-[#FAC469]', hoverText: 'hover:text-[#FAC469]' },
    { text: 'text-[#65EBE7]', hoverText: 'hover:text-[#65EBE7]' },
  ];
  const index = Math.floor(Math.abs(hashCode(seed)) % colorSet.length);
  const pickedColor = colorSet[index];

  return pickedColor;
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
