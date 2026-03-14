import { Counter } from "./counter";

export default function Page() {
    return (
        <main className="flex p-8 flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Next.js Playground</h1>
            <Counter />
        </main>
    );
}
