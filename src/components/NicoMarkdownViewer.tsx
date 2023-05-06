'use client';

export default function CustomMarkdownViewer({ content }: { content: string }) {
  return (
    <div
      className='custom-markdown-style'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
