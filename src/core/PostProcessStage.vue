<script lang="ts">
import Cesium from 'cesium'
import Vue from 'vue'
import Component from 'vue-class-component'

export interface PostProcessStageCesiumProps {
  enable?: boolean
  selected?: any[]
}

export interface PostProcessStageContext {
  scene: Cesium.Scene
}

export interface PostProcessStage {
  enabled: boolean
  uniforms: any
  isDestroyed(): boolean
  destroy(): void
}

const cesiumProps: (keyof PostProcessStageCesiumProps)[] = ['enable', 'selected']

@Component
export class PostProcessStage extends Vue {
  msg: string = 'hello'
  mounted() {}
  // 计算属性
  get computedMsg() {
    return 'computed ' + this.msg
  }
  // 方法
  greet() {
    alert('greeting: ' + this.msg)
  }
}
</script>
