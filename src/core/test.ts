import { Event } from 'cesium'

export interface ClockCesiumEvents {
  onStop?: (clock: Cesium.Clock) => void
  onTick?: (clock: Cesium.Clock) => void
}

export type EventKeys<T> = { [P in keyof T]: T[P] extends Cesium.Event ? P : never }[keyof T]
export type EventkeyMap<T, P> = { [K in EventKeys<T>]?: P }

interface T {
  name: string
  age: number
}
// type b = EventKeys<Cesium.Globe>
// type a = EventkeyMap<Cesium.Globe, keyof ClockCesiumEvents>
// keyof T === 'name | age' => [P in keyof T] === 'name | age' => T[P] === 'string | age'
// T[P] extends Cesium.Event === false => T[P] extends Cesium.Event ? P : never === never

interface test {
  name: string
  age?: number
}
type K = 'name' | 'age'
type M = string
interface testExclude {
  name: string
  age?: number
  sex: string
}
type a = Partial<test>
type b = Required<test>
type c = Readonly<test>
type d = Pick<test, K>
type e = Record<K, test>
// let ee: e = { name: { name: '11' } }
type f = Exclude<testExclude, test>
type fa = Extract<testExclude, test>
type f1 = Exclude<test, K>
type f2 = Exclude<M, test> // type interface cannot extends each other
type g = Exclude<testExclude, test>
type h = K extends M ? K : M
