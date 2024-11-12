import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

async function NewsDetailsPage({ params }) {
    const { slug } = await params;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

    return (
        <>
            <h1 id="title">News Details Page</h1>
            <article className="news-article">
                <header>
                    <Link href={`/news/${slug}/image`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                    </Link>
                    <h1>{newsItem.title}</h1>
                    <time dateTime={newsItem.date}>{newsItem.date}</time>
                </header>
                <p>{newsItem.content}</p>
            </article>
        </>
    )
}

export default NewsDetailsPage;