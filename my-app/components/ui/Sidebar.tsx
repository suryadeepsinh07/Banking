'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const Sidebar = ({user}:SiderbarProps) => {
    const pathName=usePathname()
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" 
            className="mb-12 cursor-pointer items-center gap-2 flex">
                <Image 
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt='Horizon Logo'
                className='size-[24px]
                max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Horizon</h1>
            </Link>
            {sidebarLinks.map(
                (i)=>{

                    const isActive=pathName===i.route||pathName.startsWith(`${i.route}/`)
                    return(
                        <Link 
                        href={i.route} key={i.label} className={cn('sidebar-link',
                            {'bg-bank-gradient':isActive}
                        )}>

                           <div className='relative size-6'>
                            <Image
                            src={i.imgURL}
                            alt={i.label}
                            fill
                            className={cn({
                               'brightness-[3] invert-0':isActive 
                            })}
                            />
                           </div>
                            <p className={cn('sidebar-label',
                                {'!text-white': isActive}
                            )}>{i.label}</p>
                        </Link>
                    )
                }
            )}

            <PlaidLink user={user}/>
        </nav>
        <Footer user={user}/> 
    </section>
  )
}

export default Sidebar