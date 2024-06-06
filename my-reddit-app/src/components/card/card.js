import "./Card.css";

//pass through props to get our titles
const Card = (props) => {
        
    return (
            <article className="reddit-post">
                {/*Accessing title and image of post */}
                    <h3>{props.article.title}</h3>
                    <div className="image">
                    {props.article.preview ? <img src={props.article.preview.images[0].source.url}/> : null}
                    </div>
                    

            </article>
    )
}

export default Card;