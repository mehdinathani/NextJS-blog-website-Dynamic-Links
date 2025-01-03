import Link from "next/link";
import blogData from "@/blogdata";

export default function BlogHome() {
    return (
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 min-h-screen p-6 flex items-center justify-center">
            <div className="bg-white text-blue-800 rounded-xl shadow-xl p-8 max-w-3xl w-full">
                {/* Heading */}
                <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
                    Explore My Blog
                </h1>

                {/* Description */}
                <p className="text-lg text-center text-gray-600 mb-6">
                    Dive into tutorials, tips, and insights on web development and beyond.
                </p>

                {/* Blog List */}
                <ul className="space-y-4">
                    {blogData.map((blog) => (
                        <li key={blog.id} className="border-b border-gray-200 pb-4">
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition duration-300"
                            >
                                {blog.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
