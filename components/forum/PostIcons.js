import { useMutation } from "@apollo/react-hooks";
import { UPDATE_LIKE_COUNT } from "../../gql/mutations";
import EyeIconSVG from "../svg/EyeIconSVG";
import CommentIconSVG from "../svg/CommentIconSVG";
import LikeIconSVG from "../svg/LikeIconSVG";

export default function PostIcons({ data }) {
  const [addLike] = useMutation(UPDATE_LIKE_COUNT);
  
  async function incLikes() {    
    const count = data.likeCount ? data.likeCount : 0;
    const newCount = count + 1;
    const {} = await addLike({
      variables: {
        id: data.id,
      },
      optimisticResponse: {
        __typename: "Mutation",
        addLikeToPost: {
          id: data.id,
          __typename: "Post",
          likeCount: newCount,
        },
      },
    });
  };

  return (
    <>
      <div className="my-4 mx-2">
        <div className="flex">
          <EyeIconSVG /> {data.viewCount || 0}
        </div>
      </div>
      <div className="my-4 mx-2">
        <div className="flex">
          <CommentIconSVG /> {data.comments.length ? data.comments.length : 0}
        </div>
      </div>
      <div className="my-4 mx-2">
        <div className="flex cursor-pointer" onClick={incLikes}>
          <LikeIconSVG />
          {data.likeCount ? data.likeCount : 0}
        </div>
      </div>
    </>
  );
}
