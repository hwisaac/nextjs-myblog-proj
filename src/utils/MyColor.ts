export class MyColors {
  private bg: string;
  private text: string;
  private border: string;

  private hoverBg: string;
  private hoverText: string;
  private hoverBorder: string;

  private groupHoverBg: string;
  private groupHoverText: string;
  private groupHoverBorder: string;

  constructor(color: string) {
    this.bg = `bg-${color}`;
    this.text = `text-${color}`;
    this.border = `border-${color}`;

    this.hoverText = `hover:text-${color}`;
    this.hoverBg = `hover:bg-${color}`;
    this.hoverBorder = `hover:border-${color}`;

    this.groupHoverBg = `group-hover:bg-${color}`;
    this.groupHoverText = `group-hover:text-${color}`;
    this.groupHoverBorder = `group-hover:border-${color}`;
  }

  public getClassName() {
    return {
      bg: this.bg,
      text: this.text,
      border: this.border,

      hoverText: this.hoverText,
      hoverBg: this.hoverBg,
      hoverBorder: this.hoverBorder,

      groupHoverBg: this.groupHoverBg,
      groupHoverText: this.groupHoverText,
      groupHoverBorder: this.groupHoverBorder,
    };
  }
}
