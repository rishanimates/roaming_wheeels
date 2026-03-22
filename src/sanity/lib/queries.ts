import { groq } from 'next-sanity'

// Get all blog posts
export const postsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    category,
    location,
    featured,
    publishedAt,
    readTime,
    "author": author->{name, slug, "image": image.asset->url}
  }
`

// Get a single blog post by slug
export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    location,
    content,
    featured,
    publishedAt,
    readTime,
    "author": author->{name, slug, image, bio}
  }
`

// Get posts by category
export const postsByCategoryQuery = groq`
  *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    category,
    location,
    featured,
    publishedAt,
    readTime,
    "author": author->{name, slug, "image": image.asset->url}
  }
`

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    category,
    location,
    featured,
    publishedAt,
    readTime,
    "author": author->{name, slug, "image": image.asset->url}
  }
`


