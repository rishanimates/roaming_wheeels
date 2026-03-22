export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  featuredImage?: string
  category: 'Adventures' | 'Challenges' | 'Culture' | 'Tips' | 'Reflections'
  location: string
  featured: boolean
  publishedAt: string
  readTime: number
  author?: {
    name: string
    slug: {
      current: string
    }
    image?: string
  }
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  bio?: Array<Record<string, unknown>>
}

