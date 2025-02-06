import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { auth } from "@/auth";


export default async function Layout({ children }: { children: React.ReactNode }) {

    const session = await auth();

    if (!session) redirect('/sign-in');

    return (
        <main className="root-container">
            <div className="mx-auto max-w-7xl">
                <Header session={session} />

                <div className="mt-20 pb-20">{children}</div>
            </div>
        </main>
    );
}
