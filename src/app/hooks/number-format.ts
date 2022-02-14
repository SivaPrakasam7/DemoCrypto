import Numeral from "numeral";

export const FormatN = (number: string) =>
  Numeral(parseFloat(number)).format("0,0.00");
