import { atom } from 'jotai'

export interface RocketQueryState {
  limit: number
  filter: string
}

export const maxQuerySize = 20
export const rocketDataAtom = atom<RocketQueryState>({
  limit: maxQuerySize,
  filter: '',
})
