import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-800 min-h-screen flex flex-col items-center p-6 space-y-10">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-white text-center drop-shadow-lg cursor-pointer">
        <Link href="/" className="text-white text-2xl font-bold hover:underline" />
        Welcome to My Blog

      </h1>

      {/* Subheading */}
      <p className="text-xl text-blue-200 text-center max-w-2xl leading-relaxed">
        Discover articles, tutorials, and tips on web development with Next.js and Tailwind CSS. Empower your journey and build smarter, faster, and better applications!
      </p>

      {/* Personal Introduction */}
      <div className="bg-white text-blue-800 rounded-xl p-8 shadow-2xl max-w-3xl text-center space-y-4">
        <p className="text-lg">
          This is <strong>Mehdi Abbas Nathani</strong>, a passionate Full Stack Developer currently specializing in <strong>Flutter</strong> and exploring modern web technologies like <strong>Next.js</strong>. I&apos;m committed to building innovative and impactful applications.
        </p>
        <p className="italic text-sm text-blue-600">
          &quot;Every line of code is a step toward innovation.&quot;
        </p>
      </div>

      {/* Connect Me Section */}
      <div className="bg-blue-900 text-white rounded-xl p-6 shadow-lg max-w-md text-center space-y-4">
        <h2 className="text-2xl font-semibold">Connect with Me</h2>
        <div className="flex flex-col items-center space-y-4">
          <Link
            href="https://www.linkedin.com/in/mehdinathani/"
            className="text-blue-300 hover:underline text-lg"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href="https://mehdinathani.github.io/"
            className="text-blue-300 hover:underline text-lg"
            target="_blank"
          >
            Website
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        {["About", "Blog", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Student Card */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/student.jpg" // Add this image to the public/assets directory
            alt="Student Illustration"
            width={250}
            height={250}
            className="rounded-full shadow-xl"
          />
          <h3 className="text-white font-semibold mt-4 text-lg">The Student</h3>
        </div>

        {/* Teacher Card */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/teacher.jpg" // Add this image to the public/assets directory
            alt="Teacher Illustration"
            width={250}
            height={250}
            className="rounded-full shadow-xl"
          />
          <h3 className="text-white font-semibold mt-4 text-lg">The Teacher</h3>
        </div>
      </div>
    </div>
  );
}
