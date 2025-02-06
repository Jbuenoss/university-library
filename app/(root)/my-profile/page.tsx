import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { signOut } from "@/auth";

export default function Page() {
    return (
        <div>
            <form
                action={async () => {
                    "use server";

                    await signOut();
                }}
                className="mb-10"
            >
                <Button>Logout</Button>
            </form>

            <BookList title="Borrowed Books" books={sampleBooks} />
        </div>
    );
}
