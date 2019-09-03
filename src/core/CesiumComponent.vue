<script lang="ts">
import Vue, { ComponentOptions } from 'vue'

type WithContextProps<P, C> = P & CesiumProp<C>

interface CesiumProp<C> {
  cesium: C
}

export interface CesiumComponentOption<E, P, C> {
  name: string
  create: (cesiumProps: Readonly<P>, props: Readonly<P>, context: Readonly<C>) => E
  mount?: (element: E, context: Readonly<C>, props: Readonly<P>) => void
  unmount?: (element: E, context: Readonly<C>, props: Readonly<P>, state: any) => void
  update?: (element: E, props: Readonly<P>, prevProps: Readonly<P>, context: Readonly<C>) => void
  // provide?: (element: E, props: Readonly<P>, state: any) => CC // 作用不明
  setCesiumPropsAfterCreate?: boolean
  noRender?: boolean
  createRef?: boolean
}

const createCesiumComponent = <E, P, C>(
  opts: CesiumComponentOption<E, P, C>,
): ComponentOptions<Vue> => {
  const CesiumComponent = Vue.extend({
    name: opts.name,
    created() {
      const cesiumProps = this.$props
      const element = ''
    },
  }) as ComponentOptions<Vue>
  return CesiumComponent
}
</script>
