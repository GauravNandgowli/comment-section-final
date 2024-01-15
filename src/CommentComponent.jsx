import { useState } from "react";
import styles from "./CommentComponent.module.css";

function CommentComponent({ comment, commentTree }) {
  const currentDate = new Date();
  const commentDate = new Date(comment.commentDate);
  const width = `calc(100% - ${comment.level * 1}em)`;
  const [showReply, setShowReply] = useState(false);

  const diffTime = Math.abs(currentDate - commentDate);
  const diffSeconds = diffTime / 1000;
  const diffMinutes = diffSeconds / 60;
  const diffHours = diffMinutes / 60;
  const diffDays = diffHours / 24;
  const diffMonths = diffDays / 30.44; // Average number of days in a month
  const diffYears = diffDays / 365.25; // Average number of days in a year

  let timeDifference;
  if (diffYears >= 1) {
    timeDifference = `${Math.floor(diffYears)} ${
      diffYears < 2 ? "year" : "years"
    } ago`;
  } else if (diffMonths >= 1) {
    timeDifference = `${Math.floor(diffMonths)} ${
      diffMonths < 2 ? "month" : "months"
    } ago`;
  } else if (diffDays >= 1) {
    timeDifference = `${Math.floor(diffDays)} ${
      diffDays < 2 ? "day" : "days"
    } ago`;
  } else if (diffHours >= 1) {
    timeDifference = `${Math.floor(diffHours)} ${
      diffHours < 2 ? "hour" : "hours"
    } ago`;
  } else if (diffMinutes >= 1) {
    timeDifference = `${Math.floor(diffMinutes)} ${
      diffMinutes < 2 ? "minute" : "minutes"
    } ago`;
  } else {
    timeDifference = `${Math.round(diffSeconds)} seconds ago`;
  }
  return (
    <div className={styles.commentBox} style={{ width }}>
      <div className={styles.commentComponent}>
        <span className={styles.avatarSection}>
          <img src={comment.avatar} className={styles.avatar} />
        </span>
        <div className={styles.commentBody}>
          <div className={styles.commentHeader}>
            <span className={styles.userName}>
              <a>{comment.userName}</a>
            </span>
            <span className={styles.timeDiff}>{timeDifference}</span>
          </div>
          <div className={styles.comment}>
            <p className={styles.commentText}>{comment.comment}</p>
          </div>
          <span className={styles.btn}>
            <button>reply</button>
          </span>
        </div>
      </div>

      {!showReply && comment.reply.length >= 2 ? (
        <button onClick={() => setShowReply(true)}>Show more replies</button>
      ) : comment.reply.length > 0 ? (
        comment.reply.map((replyComment) => {
          return (
            <CommentComponent
              key={replyComment.userid}
              comment={replyComment}
              commentTree={commentTree}
            />
          );
        })
      ) : null}
    </div>
  );
}

export default CommentComponent;
