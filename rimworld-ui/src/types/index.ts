export type Character = {
  name: string
  gender: '男性' | '女性' | '不明'
  age: number
  birthYear?: number
  faction: string
  ideology?: string
  traits: {name: string, description?: string}[]
  weaknesses: string[]
  childhood: string
  adulthood: string
  skills: { name: string; value: number; passion: 0|1|2 }[]
  talents: { icon: string; label: string; description: string }[]
}
