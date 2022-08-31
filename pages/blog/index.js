import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function index({ posts }) {
    // console.log(posts);

    return (
        <div className="container px-4 py-5">
            <h1 className="text-center">Bienvenue sur le blog</h1>
            <p className="text-center">Voici les articles</p>
            <div className="row g-3 mt-4">
                {posts.map((post) => (
                    <div key={uuidv4()} className="col-12 col-md-6 col-xl-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">
                                    {post.body.slice(0, 20) + "..."}
                                </p>
                                <Link href={`/blog/${post.id.toString()}`}>
                                    <a className="card-link">
                                        Lire cet article
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();

    return {
        props: {
            posts,
        },
    };
}
