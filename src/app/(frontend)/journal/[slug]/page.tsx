import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '../../Components/Journal/data'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export default async function JournalArticlePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <article style={{ paddingTop: '70px' }}>
        <Link href="/">Back to home</Link>
        <h1>{article.title}</h1>
        <Image src={article.image} alt={article.title} />
        <p>{article.content}</p>
      </article>
      <Footer />
    </>
  )
}
