import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

function LatestPage() {
    const latestNews = getLatestNews();
    
    return <>
        <h1 id="title">Latest Page</h1>
        <NewsList news={latestNews} />
    </>
}

export default LatestPage;