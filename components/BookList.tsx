import { Smooch_Sans } from "next/font/google";
import BookCard from "./BookCard";

const smooch_Sans = Smooch_Sans({ subsets: ['latin'] });

interface Props {
    title: string;
    books: Book[];
    containerClassName?: string;
}

export default function BookList({ title, books, containerClassName }: Props) {
    if (books.length < 2) return;

    return (
        <section className={containerClassName}>
            <h2 className={`${smooch_Sans.className} antialiased font-bebas-neue text-4xl text-light-100`}>{title}</h2>

            <ul className="book-list">
                {books.map((book) => (
                    <BookCard key={book.title} {...book} />
                ))}
            </ul>
        </section>
    );
}
