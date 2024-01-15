import CommentComponent from "./CommentComponent";
import styles from "./CommentView.module.css";

function CommentView({ commentTree }) {
  return (
    <div className={styles.commentView}>
      {commentTree.map((comment) => {
        return (
          <CommentComponent
            key={comment.userid}
            comment={comment}
            commentTree={commentTree}
          />
        );
      })}
    </div>
  );
}

export default CommentView;
