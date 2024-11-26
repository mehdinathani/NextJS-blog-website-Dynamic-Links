import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-900 text-white py-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8">
                <h1 className="text-2xl font-bold">Mehdi&rsquo; Blog</h1>
                <nav>
                    <ul className="flex gap-4 md:gap-8">
                        <li>
                            <Link href="/about" passHref>
                                <span className="hover:underline cursor-pointer">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" passHref>
                                <span className="hover:underline cursor-pointer">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref>
                                <span className="hover:underline cursor-pointer">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
