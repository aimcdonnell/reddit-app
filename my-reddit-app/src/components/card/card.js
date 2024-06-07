import "./Card.css";

//pass through props to get our titles
const Card = (props) => {

    //add alt text property to image tags
    return (
            <article className="reddit-post">
                {/*Accessing title and image of post */}
                    <h3>{props.article.title}</h3>
                    <div className="image">
                    {props.article.preview ? <img src={props.article.url}/> : null}
                    {props.article.preview  ? <a href={props.article.permalink}>Read more</a> : null}
                    {props.article ? <p>{props.article.selftext}</p> : null}
                    {/*{props.article.secure_media ? <video>{props.article.secure_media.reddit_video.fallback_url}</video> : null}*/}
                    </div>
                    

            </article>
    )
}

export default Card;