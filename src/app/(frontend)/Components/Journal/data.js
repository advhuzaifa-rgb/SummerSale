import one from './1.webp'
import two from './2.webp'
import three from './3.webp'

export const articles = [
  {
    slug: 'summer-styling-guide-10-easy-ways-to-refresh-your-home',
    image: one,
    title: 'Summer Styling Guide: 10 Easy Ways to Refresh Your Home This Season',
    content:
      'Placeholder body content for this article. Replace with the real write-up once the blog page design is ready.',
  },
  {
    slug: 'top-summer-interior-design-trends-2026',
    image: two,
    title: 'Top Summer Interior Design Trends for 2026',
    content:
      'Placeholder body content for this article. Replace with the real write-up once the blog page design is ready.',
  },
  {
    slug: 'summer-home-edit-accessories-worth-investing-in',
    image: three,
    title: 'The Summer Home Edit : Accessories Worth Investing In',
    content:
      'Placeholder body content for this article. Replace with the real write-up once the blog page design is ready.',
  },
]

export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug)
