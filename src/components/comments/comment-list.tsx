import CommentShow from "@/components/comments/comment-show";
import {
  CommentWithAuthor,
  fetchCommentsByPostsId,
} from "@/db/queries/comments";

interface CommentListProps {
  fetchData?: () => Promise<CommentWithAuthor[]>;
  postId: string;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({
  // fetchData,
  postId,
}: CommentListProps) {
  // const comments = await fetchData();
  const comments = await fetchCommentsByPostsId(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        // comments={comments}
        postId={postId}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
