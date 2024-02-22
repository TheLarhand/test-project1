import MyBytton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
          <div className="post__content">
            <strong>{props.number}. {props.post.title}</strong>
            <div>
              {props.post.body}
            </div>
          </div>
          <div className="post__btns">
            <MyBytton onClick={() => props.remove(props.post)}>Delete</MyBytton>
          </div>
        </div>
    )
}

export default PostItem;