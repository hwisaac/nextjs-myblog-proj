export default function decodeSlug(slug: string): string {
  const decodedSlug = decodeURIComponent(slug);
  const unicodeSlug = decodedSlug.replace(/\\u[\dA-F]{4}/gi, (match) =>
    String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16))
  );
  return unicodeSlug;
}
