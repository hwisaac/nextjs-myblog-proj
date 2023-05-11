export default function createSlug(title: string): string {
  const slug = title
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camel case를 kebab case로 변환
    .toLowerCase() // 모두 소문자로 변환
    .replace(/:/g, '') // 콜론(:) 제거
    .replace(/\s+/g, '-') // 공백을 하이픈(-)으로 대체
    .replace(/[^a-z0-9가-힣-]/g, '') // 특수 문자 제거
    .replace(/--+/g, '-') // 중복된 하이픈(-) 제거
    .replace(/^-+|-+$/g, '') // 앞뒤로 남은 하이픈(-) 제거
    .substring(0, 50) // 슬러그 길이 제한
    .normalize('NFD') // 유니코드 정규화
    .replace(/[\u0300-\u036f]/g, ''); // 유니코드 문자 제거

  return slug;
}
