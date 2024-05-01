import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/e9ebd11e-6221-4e79-bf29-c162e52a1dac-kxjuhr.jpg",
  "https://utfs.io/f/920ee907-71f0-4c0c-ba9f-4c7aed5a1a53-20twl6.jpg",
  "https://utfs.io/f/cda6fd1b-6db3-441b-a855-344e1094429c-ifcj4g.jpg",
  "https://utfs.io/f/44f58127-1b33-42fd-af44-550c5cffe1c5-z1xtj4.jpg",
];

const mockImages = [...mockUrls, ...mockUrls, ...mockUrls].map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log("posts", posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="A landscape image" />
          </div>
        ))}
      </div>
    </main>
  );
}
