"use client";

import { useState } from "react";

type Blog = {
    id: number;
    slug: string;
    title: string;
    content: string;
};

export default function BlogPageClient({ blog }: { blog: Blog }) {
    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState("");

    const addComment = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return (
        <div>
            {/* Blog Section */}
            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <p className="text-lg text-green-700">{blog.content}</p>
            </div>

            {/* Comment Section */}
            <div className="p-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Comments</h2>

                <textarea
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={addComment}
                >
                    Submit
                </button>

                <div className="mt-4">
                    {comments.length === 0 ? (
                        <p>No comments yet.</p>
                    ) : (
                        comments.map((c, index) => (
                            <p key={index} className="p-2 border-b">
                                {c}
                            </p>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
