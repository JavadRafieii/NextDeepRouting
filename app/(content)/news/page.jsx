import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

function NewsPage() {
    const news = getAllNews();

    return <>
        <h1 id="title">News Page</h1>
        <NewsList news={news} />
    </>
}

export default NewsPage;