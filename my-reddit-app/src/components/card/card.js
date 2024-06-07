import "./Card.css";

//pass through props to get our titles
const Card = (props) => {

    //add alt text property to image tags
    return (
            <article className="reddit-post">
                {/*Accessing title and image of post */}
                    <h3>{props.article.title}</h3>
                    <div className="image">
                    {props.article.preview ? <img src={props.article.url}/> : <img src={props.article.url_overridden_by_dest} />}
                    {props.article ? <p>{props.article.selftext}</p> : null}
                    <video>{props.article.secure_media.reddit_video.fallback_url}</video>
                    </div>
                    

            </article>
    )
}

export default Card;