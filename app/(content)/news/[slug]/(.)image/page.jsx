import { DUMMY_NEWS } from "@/dummy-news";
import { Modal } from "@/components/modal";

async function ImageNewsPage({ params }) {
    const { slug } = await params;

    const targetedItem = DUMMY_NEWS.find(item => item.slug === slug);

    const { title, image, content } = targetedItem;

    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
            <Modal>
                <img src={`/images/news/${image}`} alt={title} />
            </Modal>
        </>

    )
}

export default ImageNewsPage;