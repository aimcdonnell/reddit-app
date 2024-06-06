import "./Card.css";

//pass through props to get our titles
const Card = (props) => {

    return (
            <article className="reddit-post">
                <a href={ "https://reddit.com" + props.article.permalink }>
                    <h3>Title</h3>
                </a>
            </article>
    )
}

export default Card;