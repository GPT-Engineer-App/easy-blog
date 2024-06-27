import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  { id: 1, title: "First Blog Post", excerpt: "This is the first blog post." },
  { id: 2, title: "Second Blog Post", excerpt: "This is the second blog post." },
  { id: 3, title: "Third Blog Post", excerpt: "This is the third blog post." },
];

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">My Blog</h1>
        <nav className="mt-4 text-center">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
                <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;