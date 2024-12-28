// import { Button } from "@nextui-org/react";
// import * as actions from "@/actions";
// import { auth } from "@/auth";
// import Profile from "@/components/profile";

import PostList from "@/components/posts/post-list";
import TopicList from "@/components/topics/topic-list";
import TopicCreateForm from "@/components/topics/topics-create-form";
import { fetchTopPosts } from "@/db/queries/post";
import { Divider } from "@nextui-org/react";

export default function Home() {
  // const session = await auth();
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* HOme Page */}
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>

      {/* <form action={actions.singnIn}>
        <Button type="submit">SignIn</Button>
      </form>
      <form action={actions.singnOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>
      }

      <Profile/> */}
    </div>
  );
}
