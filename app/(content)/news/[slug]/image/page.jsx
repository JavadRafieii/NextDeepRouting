import { DUMMY_NEWS } from "@/dummy-news";

async function ImageNewsPage({ params }) {
    const { slug } = await params;

    const targetedItem = DUMMY_NEWS.find(item => item.slug === slug);

    const { title, image } = targetedItem;

    return <img src={`/images/news/${image}`} alt={title} />
}

export default ImageNewsPage;