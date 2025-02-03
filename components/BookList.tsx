import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({ subsets: ['latin'] });

export default function Page() {
    return (
        <section>
            <h2 className={`${smooch_Sans.className} antialiased font-bebas-neue text-4xl text-light-100`}>Popular Books</h2>
        </section>
    );
}
