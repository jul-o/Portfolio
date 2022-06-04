import { useRouter } from "next/router";

const Article = () => {
    const props = useRouter().query;

    return (
        <p>Article n°{props.pageNumber}</p>
    )
}

export default Article;