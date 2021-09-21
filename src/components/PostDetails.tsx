import {IPost} from "../interfaces/IPost";

const PostDetails = ({...props}) => {

    const state:IPost = props.location.state

    return <div>
        <h2>Post details</h2>
        <p>ID - {state.id} User ID - {state.userId}</p>
        <p>{state.body}</p>
    </div>
}

export default PostDetails;


// import {RouteComponentProps, useHistory} from "react-router";
//
// const PostDetails = (props:RouteComponentProps) => {
//
//     let history = useHistory()
//
//     console.log(history.location.state);
//
//     return <div>
//         Post details
//     </div>
// }
//
// export default PostDetails;