// https://stackoverflow.com/questions/105034/how-to-create-guid-uuid/2117523#2117523

export function createWeakUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c: string): string {
      let r: number = (Math.random() * 16) | 0;
      let v: number = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
}
