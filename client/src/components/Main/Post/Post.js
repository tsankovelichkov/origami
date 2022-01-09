import style from './Post.module.css';


function Post({data}) {
    
    return (
        <div className={style.post}>
            <img src="/blue-origami-bird.png" alt=""/>
                <p>{data.content}</p>
                <div className={style.description}>
                    <span>
                        <small>Author:</small>
                        {data.author}
                    </span>
                </div>
        </div>
    );
}

export default Post