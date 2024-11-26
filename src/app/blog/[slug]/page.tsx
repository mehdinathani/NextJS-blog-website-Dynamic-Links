import { Metadata } from 'next';
import blogData from '@/blogdata';

// Define the props for the dynamic route
interface PageProps {
    tparams: {
        slug: string;
    };
}

// Generate metadata for the blog post
export async function generateMetadata({ tparams }: PageProps): Promise<Metadata> {
    const selectedBlog = blogData.find((blog) => blog.slug === tparams.slug);

    return {
        title: selectedBlog?.title || 'Blog Post',
        description: selectedBlog?.content.slice(0, 150) || 'Read our latest blog post.',
    };
}

export function Page({ tparams }: PageProps) {
    const selectedBlog = blogData.find((blog) => blog.slug === tparams.slug);

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
