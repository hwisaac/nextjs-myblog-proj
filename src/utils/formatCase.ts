export default function formatCase(str: string): string {
  return str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
}
