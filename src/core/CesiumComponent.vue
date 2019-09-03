<script lang="ts">
import Vue, { ComponentOptions, PropsDefinition } from 'vue'

type DefaultData<V> = object | ((this: V) => object)
type DefaultProps = Record<string, any>
type DefaultMethods<V> = { [key: string]: (this: V, ...args: any[]) => any }
type DefaultComputed = { [key: string]: any }
export interface CesiumComponentOption<
  V extends Vue,
  Data = DefaultData<V>,
  Methods = DefaultMethods<V>,
  Computed = DefaultComputed,
  PropsDef = PropsDefinition<DefaultProps>,
  Props = DefaultProps
> {
  name: string
  create: (
    cesiumProps: Readonly<Vue.PropOptions>,
    props: Readonly<P>,
    context: Readonly<C>,
    ref?: R, // Vue的ref没有给类型(自己找的:{ [key: string]: Vue | Element | Vue[] | Element[] },它就是个Object),React是RefObject,
  ) => // Object不会接收undefined和null值
  E | [E, any]
  mount?: (element: E, context: Readonly<C>, props: Readonly<P>, ref?: R) => void
  unmount?: (
    element: E,
    context: Readonly<C>,
    props: Readonly<P>,
    ref: R | undefined,
    state: any,
  ) => void
  render?: (
    element: E | undefined,
    props: Readonly<P> & Readonly<{ children?: Vue.VNode }>,
    mounted: boolean,
    ref: R | undefined,
  ) => Vue.VNode
  update?: (element: E, props: Readonly<P>, prevProps: Readonly<P>, context: Readonly<C>) => void
  provide?: (element: E, props: Readonly<P>, state: any) => CC // 作用不明
  cesiumProps?: (keyof P)[]
  cesiumReadolyProps?: (keyof P)[]
  setCesiumPropsAfterCreate?: boolean
  noRender?: boolean
  createRef?: boolean
}

const createCesiumComponent = <E, P, C, CC = {}, R = {}>(
  opts: CesiumComponentOption<E, P, C, CC, R>,
): ComponentOptions<CesiumComponentOption<E, P, C, CC, R>> => {
  const CesiumComponent = Vue.extend({
    name: opts.name,
    props: opts.$props,
    // created() {},
  }) as ComponentOptions<CesiumComponentOption<E, P, C, CC, R>>
  return CesiumComponent
}
</script>
