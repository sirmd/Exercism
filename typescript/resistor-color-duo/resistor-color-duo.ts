interface colorMapInterface {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  violet: number;
  grey: number;
  white: number;
}

export class ResistorColor {
  private colorMap: colorMapInterface = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }
  constructor(private colors: (keyof colorMapInterface)[]) {
    if (colors.length< 2) throw new Error('At least two colors need to be present');    
  }

  public value = (): number => {
    const returnVal = this.colors.slice(0, 2).map(color => String(this.colorMap[color])).join('');
    return Number(returnVal);
  }
}
