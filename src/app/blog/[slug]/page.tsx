import blogData from "@/data/blogdata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const selectedBlog = blogData.find((blog) => blog.slug === resolvedParams.slug);

    return {
        title: selectedBlog?.title || "Blog Post",
        description: selectedBlog?.content.slice(0, 150) || "Read our latest blog post.",
    };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await props.params; // Await the `params` promise
    const { slug } = resolvedParams;

    const selectedBlog = blogData.find((blog) => blog.slug === slug);

    if (!selectedBlog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{selectedBlog.title}</h1>
            <p className="text-lg text-green-700">{selectedBlog.content}</p>
        </div>
    );
}
