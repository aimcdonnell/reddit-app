import "./Card.css";

//pass through props to get our titles
const Card = (props) => {

    //add alt text property to image tags
    return (
            <article className="reddit-post">
                {/*Accessing title and image of post */}
                <div>
                    <h3>{ props.article.title }</h3>
                </div>
                {/*MAKE CODE SO THAT THE POST EITHER SHOWS AN IMAGE, LINK OR POST TEXT DEPENDING ON WHAT'S AVAILABLE */}
                    <div id="post-image">
                {/*Accessing Reddit images - either located in a gallery or have a post_hint property*/}
                    { props.article.post_hint === "image" || props.article.is_gallery === true ?  <img src={props.article.thumbnail} alt={props.article.title}/> : null }
                    
                    </div>
                    <div id="post-video">
                {/*Accessing Reddit videos*/}
                    { props.article.secure_media ? <video width="750" height="500" controls>
                        <source src={props.article.secure_media.reddit_video.fallback_url}/>
                    </video> : null }
                    </div>
                {/*Accessing Reddit post text */}
                    <div id="post-text">
                    { props.article.selftext ? <p>{props.article.selftext}</p> : null }
                    </div>
                    

            </article>
    )
}

export default Card;