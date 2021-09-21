import React from "react";
import { IPost } from "../interfaces/IPost";
import {Link} from "react-router-dom";

const Post = ({item}:{item: IPost}) => {
    return <div>
        <h2>{item.title}</h2>
        <Link to={{pathname:`/posts/${item.id}`,state : item}}>details</Link>
    </div>
}

export default Post;


// import {FC, MouseEvent} from "react";
// const Post: FC<IPost> = (props: IPost) => {
//
//     let {body, id, title, userId} = props;
//     let onClick = (e: MouseEvent<HTMLButtonElement>): void => {
//         console.log(e.pageX);
//     };
//     return <div>
//         <h2>{title}</h2>
//         <p>{body}</p>
//         {/*<button onClick={onClick}> details*/}
//         {/*</button>*/}
//         <Link to={'/posts/' + id}>details</Link>
//     </div>
// }
// export default Post;