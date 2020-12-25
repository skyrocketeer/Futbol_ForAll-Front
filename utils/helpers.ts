export function normalizeClassNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ')
}

const checkClient = (): boolean => typeof window !== 'undefined' ? true : false
export const isClient = checkClient()