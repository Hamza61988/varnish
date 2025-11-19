/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vue 3 compiler macros - Global declarations for Vetur
declare global {
  const defineProps: <T = any>() => T
  const defineEmits: <T = any>() => T
  const defineExpose: <T = any>(exposed: T) => void
  const withDefaults: <T, U extends Record<string, any>>(
    props: T,
    defaults: U
  ) => T & U
}

