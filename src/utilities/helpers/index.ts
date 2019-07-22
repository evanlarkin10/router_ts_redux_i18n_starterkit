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
