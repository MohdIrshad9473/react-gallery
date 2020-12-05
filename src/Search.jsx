import React, { Component } from 'react'
import axios from "axios";
import Image from "./Image"



class Search extends Component {
    state = {
        keyword: '',
        photos:[],
        loader:false
    }
    
    inputHandel = (e) => {

        this.setState({
            keyword: e.target.value
        });
    };
    searchImage= async(e)=>
    {
        e.preventDefault();
        this.setState({loader:true})
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=35&page=1`
        ,
        {
           headers:{
               Authorization:
               "563492ad6f91700001000001067d133e292a4e20a7078c39a50094be"
           }
        }
        );
        this.setState({loader:false})
        this.setState({photos:res.data.photos})
        console.log(this.state.photos)

    };
    
    render() {
        return (
            <>
            <form onSubmit={this.searchImage}>
                <div className="form-group">
                    <input
                        type="text"
                        name="keyword"
                        className="form-control"
                        value={this.state.keyword}
                        onChange={this.inputHandel}
                        placeholder="Search Irshad's Image..."
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Search image"
                        className="btn btn-primary btn-block"

                    />
                </div>
            </form>
            <div className="row">
            {!this.state.loader?(this.state.photos.map(img=>
                <Image image={img} key={img.id}/>
            )):
            <h1 className="center">loading...</h1>
            }
            </div>
            </>
        );
    }
}

export default Search
