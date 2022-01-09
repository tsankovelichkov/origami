import { Component } from 'react';
import style from './Main.module.css';

import * as postService from "../../services/postService";
import Post from './Post/Post';


class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(res => this.setState({posts:res}))
    }

    render() {
        console.log(this.state)
        return (
            <main className={style.main}>
                <h1>Sooooome Heading</h1>
                <div className={style.posts}>
                    {this.state.posts.map(x=>
                       <Post key={x.id} data={x}/>
                    )}
                </div>
            </main>
        )

    }
}

export default Main