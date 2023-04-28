export function colors(color: string) {
  return {
    bg: `bg-${color}`,
    text: `text-${color}`,
    border: `border-${color}`,
  };
}

export class MyColors {
  private bg: string;
  private text: string;
  private border: string;

  constructor(color: string) {
    this.bg = `bg-${color}`;
    this.text = `text-${color}`;
    this.border = `border-${color}`;
  }

  public getClassName() {
    return { bg: this.bg, text: this.text, border: this.border };
  }
}
