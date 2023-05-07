'use client';

export default function NicoMarkdownViewer({ content }: { content: string }) {
  return (
    <div
      className='custom-markdown-style'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
