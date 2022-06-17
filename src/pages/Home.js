import axios from 'axios';
import React, { Component } from 'react';

import './Home.css';

const List = (props) => {
    const titles = props.data.map((el) => {
        return (
            <div className='link'>
                <a href={`https://en.wikipedia.org/wiki/${el.title}`} target="_blank">{el.title}</a>
            </div>
        )
    })

    return titles;
}

export default class Home extends Component{
    state = {
        query: null,
        data: undefined
    }

    handleInput = event => {
        setTimeout(() => {
            this.setState({query: event.target.value})
            this.fetchQuery()
        }, 1500)
    }

    fetchQuery = () => {
        if(this.state.query){
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=25&gsrsearch=${this.state.query}`)
            .then((res) => {
                const titles = [];
                for(let i in res.data.query.pages){
                    titles.push(res.data.query.pages[i])
                }
                this.setState({data: titles})
            })
        }
    }
    
    render(){
        return(
            <>
                <header>
                    <input type="text" onChange={this.handleInput} className="input_query"/>
                </header>

                <main>
                    {this.state.data ? <List data={this.state.data}/> : console.log('enter something...')}
                </main>
            </>
        )
    }
}