"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import { MdInventory } from "react-icons/md";

export default function Header() {
    const pathName = usePathname();

    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
            </Link>
            <ul>
                <li>
                    <Link href="/storage" className={cn("text-base cursor-pointer capitalize", pathName === "/storage" ? "text-light-200" : "text-light-100")} >
                        Library
                    </Link>
                </li>
            </ul>
        </header>
    );
}
