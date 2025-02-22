export interface About {
  title: string,
  description: string,
  linkedIn: string,
  github: string
}

export interface Skill {
  text: string,
  icon?: string,
  experience: number,
  level: number
}

export interface Skills {
  title: string,
  content: Array<Skill>
}

export interface CarouselContent {
  text?: string,
  image?: string
}