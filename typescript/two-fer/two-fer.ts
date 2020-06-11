class TwoFer {
  public static twoFer = (person: string = ''): string =>
    `One for ${person === '' ? 'you' : person}, one for me.`;

}

export default TwoFer
