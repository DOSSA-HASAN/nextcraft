'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import "../globals.css"
import { useState } from "react"
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgotPassword" }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState("")
  const pathname = usePathname()

  return (
    <html lang="en">
      <body>
        <div>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <header>
          {
            navlinks.map((link) => (
              <p key={link.href}><Link href={link.href} className={`font-bold ${pathname === link.href ? 'text-red-400' : 'text-blue-400'}`}>{link.name}</Link></p>
            ))
          }
        </header>
        {children}
        <p className="font-bold text-gray-500 hover:text-gray-800">Current route : {pathname}</p>

      </body>
    </html>
  )
}
