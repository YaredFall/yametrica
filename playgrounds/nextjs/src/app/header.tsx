import Link from "next/link";

export function Header() {
    return (
        <header className="p-2">
            <nav className="flex gap-1 p-1 bg-white rounded-lg shadow-xs *:px-3 *:py-1 *:hover:bg-zinc-100 *:rounded-md *:transition-colors">
                <Link href="/">Home</Link>
                <Link href="/product">Product</Link>
            </nav>
        </header>
    );
}
