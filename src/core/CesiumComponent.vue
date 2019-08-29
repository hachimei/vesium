<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

export interface CesiumComponentOption<E, P, C, CC = {}, R = {}> {
  name: string
  create: (
    cesiumProps: Readonly<P>,
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
  defaultProps?: Partial<P>
}

@Component
export class CesiumComponent extends Vue {}
</script>
