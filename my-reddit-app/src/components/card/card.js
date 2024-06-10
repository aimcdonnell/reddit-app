import "./Card.css";
import {useState, useEffect} from 'react';

//pass through props to get our titles
const Card = () => {

const [articles, setArticles] = useState('');
    //running the async function after the page has loaded using the useEffect() hook
useEffect(() => {
    fetch("https://www.reddit.com/r/pics.json?limit=10").then(response => {
        if (response.status !== 200) {
            console.log("Error!")
            //return out of the function
            return;
        }
        //parse the response from the server through JSON
        //this returns a promise so we have to call .then()
        response.json().then(data => {
            if (data !== null) {
                //setting articles equal to the array of children
               setArticles(data.data.children);
               //console.log(data.data.children);
            }
        });
    })
    //every time, subreddit changes, the useEffect() hook will recall
}, []);

    return (
            <article className="reddit-post">
                        {/*Looping through the articles: if articles is not equal null, map through the articles array and get the article
        and index of the article. We then get the article which has a key of index. 
        Then we pass through the data of each article as a prop*/}
            {
              (articles !== null) ? articles.map((article, index) => <Card key={index} article={article.data}/>) : ''
            }
                {/*Accessing title and image of post */}
                <div id="post-title">
                    <h3>{ articles.article.title }</h3>
                </div>

                {/*MAKE CODE SO THAT THE POST EITHER SHOWS AN IMAGE, LINK OR POST TEXT DEPENDING ON WHAT'S AVAILABLE */}
                    <div id="post-image">
                {/*Accessing Reddit images - either located in a gallery or have a post_hint property*/}
                    { articles.article.post_hint === "image" ?  <img src={props.article.url} alt={props.article.title}/> : null }
                    { articles.article.is_gallery === true ?  <img src={props.article.thumbnail} alt={props.article.title}/> : null }
                    </div>
                    <div id="post-discover-more">
                {/*Accessing articles from external websites */}
                    { articles.article.domain.endsWith(".com") ? <p><a href={props.article.url}>Discover more...</a></p> : null }
                    </div>

            </article>
    )
}

export default Card;