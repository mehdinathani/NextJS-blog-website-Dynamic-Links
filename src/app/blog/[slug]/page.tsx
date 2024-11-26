import blogData from "@/blogdata";

// Define the props for the dynamic route
interface PageProps {
    params: {
        slug: string;
    };
}

// Update the metadata generation
export async function generateMetadata({ params }: PageProps) {
    const selectedBlog = blogData.find((blog) => blog.slug === params.slug);

    return {
        title: selectedBlog?.title || "Blog Post",
        description: selectedBlog?.content.slice(0, 150) || "Read our latest blog post.",
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    // Ensure `params.slug` resolves properly
    const slug = await Promise.resolve(params.slug); // Ensures async compatibility if needed
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
