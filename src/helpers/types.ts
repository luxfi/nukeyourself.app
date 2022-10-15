export enum Laser {
  Gold,
  Coral,
  Rust,
  Ruby,
  Rose,
  Jade,
  Emerald,
  Violet,
  Green,
  Green2,
  Green3,
}

export interface LaserMeta {
  src: string
  name: string
}

export interface FigureConfig {
  x?: number
  y?: number
  width?: number
  height?: number
}
