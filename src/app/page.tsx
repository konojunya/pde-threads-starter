import { FeedShell } from "@/components/feed-shell";
import { SamplePostCard } from "@/components/sample-post-card";
import { samplePosts } from "@/data/sample-posts";

export default function HomePage() {
  return (
    <FeedShell>
      {samplePosts.map((post) => (
        <SamplePostCard key={post.id} post={post} />
      ))}
    </FeedShell>
  );
}
