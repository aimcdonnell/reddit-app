import "./Card.css";

//pass through props to get our titles
const Card = (props) => {

    return (
            <article className="reddit-post">
                {/*Accessing title and image of post */}
                <div id="post-title">
                    <h3>{ props.article.title }</h3>
                </div>

                {/*MAKE CODE SO THAT THE POST EITHER SHOWS AN IMAGE, LINK OR POST TEXT DEPENDING ON WHAT'S AVAILABLE */}
                    <div id="post-image">
                {/*Accessing Reddit images - either located in a gallery or have a post_hint property*/}
                    { props.article.post_hint === "image" ?  <img src={props.article.url} alt={props.article.title}/> : null }
                    { props.article.is_gallery === true ?  <img src={props.article.thumbnail} alt={props.article.title}/> : null }
                    </div>
                    <div id="post-discover-more">
                {/*Accessing articles from external websites */}
                    { props.article.domain.endsWith(".com") ? <p><a href={props.article.url}>Discover more...</a></p> : null }
                    </div>

            </article>
    )
}

export default Card;