import { DetailEvent } from "./detail-event";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col gap-4 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-2xl font-bold">About</h1>
            <p>This page executes eCommerce detail event</p>
            <DetailEvent />
        </main>
    );
}
