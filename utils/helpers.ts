export function normalizeClassNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ')
}