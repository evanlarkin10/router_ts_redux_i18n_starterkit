import * as moment from "moment";
export function floatToCurrency(input: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return formatter.format(input);
}

export function calculateHST(input: number): number {
  return input * 0.15;
}

export function momentToReadable(input: string): string {
  return moment(input).format("MMMM Do YYYY, h:mm:ss a");
}

export function momentToReadableDateOnly(input: string): string {
  return moment(input).format("MMMM Do YYYY");
}
