'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from "app/lib/utils"
import ModeSwitcher from './ui/modeSwitcher'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/lectures': {
    name: 'Future Lectures',
  }
}

function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
    className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
  >
    
    {Object.entries(navItems).map(([path, { name }]) => {
      return (
        <Link
          key={path}
          href={path}
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
        >
          {name}
        </Link>
      )
    })}

</nav>)
}

export function Navbar() {

  return (
    <header className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex flex-row items-center justify-between pr-10">
        <div className="lg:sticky lg:top-20">
          <MainNav />
        </div>
        <nav>
          <ModeSwitcher />
        </nav>
      </div>
    </header>
  )
}
