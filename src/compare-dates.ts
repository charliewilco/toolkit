// https://stackoverflow.com/questions/40248643/typescript-sort-by-date-not-working
export function compareDates(a: string, b: string) {
  return new Date(a).getTime() - new Date(b).getTime();
}
