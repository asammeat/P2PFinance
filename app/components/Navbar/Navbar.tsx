'use client';
import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import {useEffect, useState} from 'react'
import { SafeUser } from "@/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null | undefined;
}


const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
    const [hydrated, setHydrated]= useState(false)

    useEffect(()=>{
        setHydrated(true)
    },[])
    return ( 
        hydrated&&
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="
                py-4
                border-b-[1px]
            ">
            <Container>
                <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                ">
                <Logo/>
                <Search/>
                <UserMenu user={currentUser} />
                </div>
            </Container>

            </div> 
        </div>
     );
}
 
export default Navbar;