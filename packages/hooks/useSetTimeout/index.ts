import { onBeforeUnmount } from 'vue'

export default function useSetTimeout() {
  const timer: Record<string, any> = {}

  onBeforeUnmount(() => {
    Object.keys(timer).forEach(key => {
      clearTimeout(timer[key])
    })
  })

  return { timer }
}
