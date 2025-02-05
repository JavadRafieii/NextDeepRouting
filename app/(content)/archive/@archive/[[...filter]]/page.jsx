import Link from "next/link";
import NewsList from "@/components/news-list";
import {
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
    getAvailableNewsMonths 
} from "@/lib/news";

async function ArchivePage({ params }) {
    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    return <>
        <h1 id="title">Arcchive Page</h1>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = selectedYear
                            ? `/archive/${selectedYear}/${link}`
                            : `/archive/${link}`;

                        return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>
}

export default ArchivePage;