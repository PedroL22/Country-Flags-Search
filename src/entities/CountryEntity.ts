export type SpecificCountry = {
  name: {
    common: string
    official: string
    nativeName?: Record<string, { official: string; common: string }>
  }
  population?: number
  capital?: string
  flags?: {
    svg: string
    png: string
  }
  timezones?: string[]
  continents?: string[]
}[]

export type CountryType = {
  name: {
    common: string
    official: string
    nativeName?: Record<string, { official: string; common: string }>
  }
  population?: number
  capital?: string
  flags?: {
    svg: string
    png: string
  }
  timezones?: string[]
  continents?: string[]
  fifa: string
}
