import PostList from "@/components/posts/post-list";
import PostCreateForm from "@/components/posts/posts-create-form";
import { fetchPostByTopicSlug, fetchTopicBySlug } from "@/db/queries/post";

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* Topic show page */
export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;
  const topic = await fetchTopicBySlug(slug);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <div className="my-2">
          <h2 className="font-bold">Description</h2>
          <p className="p-2 border rounded font-bold">{topic?.description}</p>
        </div>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
