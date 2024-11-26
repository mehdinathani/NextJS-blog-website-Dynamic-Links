import blogData from "@/blogdata";

export default function Page({ params }: { params: { slug: string } }) {
    const selectedBlog = blogData.find((blog) => blog.slug === params.slug);

    if (!selectedBlog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 min-h-screen p-6 flex items-center justify-center">
            <div className="bg-white text-blue-800 rounded-xl shadow-xl p-8 max-w-3xl w-full">
                <h1 className="text-4xl font-extrabold mb-6">{selectedBlog.title}</h1>
                <p className="text-lg text-gray-700 leading-relaxed">{selectedBlog.content}</p>
            </div>
        </div>
    );
}
