import "./Card.css";

//pass through props to get our titles
const Card = (props) => {

    //add alt text property to image tags
    return (
            <article className="reddit-post">
                {/*Accessing title and image of post */}
                <div>
                    <h3>{props.article.title}</h3>
                </div>
                {/*MAKE CODE SO THAT THE POST EITHER SHOWS AN IMAGE, LINK OR POST TEXT DEPENDING ON WHAT'S AVAILABLE */}
                    <div className="image">
                {/*Accessing Reddit images*/}
                    {props.article.url ?  <img src={props.article.url} alt={props.article.title}/> : null }
                    {/*{props.article.secure_media ? <video>{props.article.secure_media.reddit_video.fallback_url}</video> : null}*/}
                    {props.article.url_overridden_by_dest ? <a href={props.article.url_overridden_by_dest}>{props.article.url_overridden_by_dest}</a> : null} 
                    </div>
                {/*Accessing Reddit post text */}
                    <div className="post-text">
                    {props.article.selftext ? <p>{props.article.selftext}</p> : null}
                    </div>
                    

            </article>
    )
}

export default Card;