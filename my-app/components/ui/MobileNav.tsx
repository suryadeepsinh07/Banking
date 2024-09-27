'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from "./Footer"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathName = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
               
                <SheetTrigger> <Image
                    src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt='Menu'
                    className='cursor-pointer'
                /></SheetTrigger>
                
                <SheetContent className="border-none bg-white" >
                    <Link href="/"
                        className=" cursor-pointer items-center gap-1 flex px-4">
                        <Image
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt='Horizon Logo'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                            {sidebarLinks.map(
                        (i) => {

                            const isActive = pathName === i.route || pathName.startsWith(`${i.route}/`)
                            return (
                                <SheetClose asChild>
                                <Link
                                    href={i.route} key={i.label} className={cn('mobilenav-sheet_close w-full',
                                        { 'bg-bank-gradient': isActive }
                                    )}>

                                    
                                        <Image
                                            src={i.imgURL}
                                            alt={i.label}
                                            width={20}
                                            height={20}
                                            className={cn({
                                                'brightness-[3] invert-0': isActive
                                            })}
                                        />
                                  
                                    <p className={cn('text-16 font-semibold text-black-2',
                                        { '!text-white': isActive }
                                    )}>{i.label}</p>
                                </Link>
                                </SheetClose>
                            )
                        }
                    )}
                            </nav>
                        </SheetClose>
                        <Footer user={user} type="mobile"/>
                    </div>
                   

                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav