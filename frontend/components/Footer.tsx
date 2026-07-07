import Link from "next/link";
import Button from "./Button";
import Container from "./Container";

const courseLinks = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];

const categoryLinks = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
];

const companyLinks = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <Container className="py-16">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-3xl font-bold">
              ByteSpace
            </Link>

            <p className="mt-5 max-w-md text-sm text-gray-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-8 flex max-w-md gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-lime-400"
              />

              <Button type="submit">
                Search
              </Button>
            </form>

            <p className="mt-6 max-w-md text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="space-y-4">
            {courseLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm text-gray-700 transition hover:text-black"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            {categoryLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm text-gray-700 transition hover:text-black"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            {companyLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm text-gray-700 transition hover:text-black"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-14 h-px bg-gray-200" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2023 Basam Nazemi. All rights reserved.</p>

          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}