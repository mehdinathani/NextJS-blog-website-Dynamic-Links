import blogData from "@/blogdata";
import BlogPageClient from "./BlogPageClient";


export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const selectedBlog = blogData.find((blog) => blog.slug === slug);

    return {
        title: selectedBlog?.title || "Blog Post",
        description: selectedBlog?.content.slice(0, 150) || "Read our latest blog post.",
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const selectedBlog = blogData.find((blog) => blog.slug === slug);

    if (!selectedBlog) {
        return <div>Blog not found</div>;
    }

    return <BlogPageClient blog={selectedBlog} />;
}
