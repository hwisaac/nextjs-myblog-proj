export default function extractDescription(
  markdownString: string,
  length: number
): string {
  // 마크다운 문법에서 사용되는 특수 문자 및 태그를 제거합니다.
  const strippedString = markdownString
    .replace(/[#*`~_\[\]()>]/g, '')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replaceAll('\n', ' ');

  // 지정된 길이로 description 문자열을 추출합니다.
  const extractedDescription = strippedString.substr(0, length);

  // 추출된 문자열이 원래 문자열의 끝이 아니라 중간에 단어가 짤리는 경우에 대비하여 마지막 공백을 찾아 잘린 문자열을 조정합니다.
  const lastSpaceIndex = extractedDescription.lastIndexOf(' ');
  const finalDescription = extractedDescription.slice(0, lastSpaceIndex).trim();

  return finalDescription;
}
