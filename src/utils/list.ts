export function toUniqueList<T>(list: Array<T>): T[] {
  return Array.from(new Set(list));
}
