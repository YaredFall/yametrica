import Link from "next/link";

export function Header() {
    return (
        <header>
            <nav className="flex gap-4 px-4 py-2">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}
