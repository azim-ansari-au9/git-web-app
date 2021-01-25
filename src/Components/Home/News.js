import React, { Component } from 'react';
import '../../App.css';
import Giphy from "../Users/Giphy";

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles:[],
            loading:true
        }
    }
        
    

    componentDidMount() {
        this.setState({loading:true})
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=03aec2052dfc4060914ccae4c84d037b`)
            .then( (response) => {
                return response.json();
            })
            .then( (myJson) => {
                // console.log(myJson);
                this.setState({
                    articles:myJson.articles
                });
                this.setState({loading:false})
            });
        }

    render() {
        // console.log(this.state)
        const { loading } = this.state;
        // if(loading) return <Giphy />
        
        return(
            <div className="news">
                {loading ? <Giphy /> :
                    this.state.articles.map((item,index) => {
                    return(
                        <div className='news-section'>
                            <img src={item.urlToImage} alt={item.author} style={{width:'20vw'}} />
                            <div style={{margin:'20px'}}>
                                <h5 >{item.title }</h5>
                                <h6 style={{color:'white'}} >{item.author}</h6>
                                <h6 style={{color:'white'}}>{item.publishedAt}</h6>
                                <a href={item.url} target="/">
                                    <button>View more</button>
                                </a>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default News;