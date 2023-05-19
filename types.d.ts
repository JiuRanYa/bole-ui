// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Button: typeof import('bole-design')['Button']
    Col: typeof import('bole-design')['Col']
    Menu: typeof import('bole-design')['Menu']
    Popover: typeof import('bole-design')['Popover']
    Portal: typeof import('bole-design')['Portal']
    Row: typeof import('bole-design')['Row']
    Tooltip: typeof import('bole-design')['Tooltip']
  }

  interface ComponentCustomProperties {}
}

export {}
