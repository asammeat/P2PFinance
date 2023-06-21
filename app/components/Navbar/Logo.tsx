'use client';

import Image from "next/image";
import Link from 'next/link'
import {useRouter} from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return(
        <Link href='/' >
            <Image
                alt="logo"
                className="cursor-pointer"
                height="130"
                width="130"
                src="/images/logobpull.png"
            />
        </Link>
    )
}

export default Logo;