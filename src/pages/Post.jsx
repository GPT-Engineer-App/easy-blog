import React from "react";
import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is the full content of the first blog post." },
  { id: 2, title: "Second Blog Post", content: "This is the full content of the second blog post." },
  { id: 3, title: "Third Blog Post", content: "This is the full content of the third blog post." },
];

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">{post.title}</h1>
      </header>
      <main>
        <article>
          <p>{post.content}</p>
        </article>
      </main>
    </div>
  );
};

export default Post;