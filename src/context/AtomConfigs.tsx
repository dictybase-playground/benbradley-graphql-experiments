import { atom } from 'jotai'

export const limitOptions = ['1', '2', '3', '4']

export interface RocketQueryState {
  filter: string
}

export const rocketLimitAtom = atom(
  limitOptions[limitOptions.length - 1],
  (get, set, update) => {
    set(rocketLimitAtom, update)
    get(rocketLimitAtom)
  },
)

export const rocketLimitIntAtom = atom((get) =>
  Number.parseInt(get(rocketLimitAtom), 10),
)

export const rocketFilterAtom = atom<RocketQueryState>({
  filter: '',
})
