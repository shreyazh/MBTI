'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const personalityTypes = [
    { code: "ISTJ", name: "Logistician" },
    { code: "ISFJ", name: "Defender" },
    { code: "INFJ", name: "Advocate" },
    { code: "INTJ", name: "Architect" },
    { code: "ISTP", name: "Virtuoso" },
    { code: "ISFP", name: "Adventurer" },
    { code: "INFP", name: "Mediator" },
    { code: "INTP", name: "Logician" },
    { code: "ESTP", name: "Entrepreneur" },
    { code: "ESFP", name: "Entertainer" },
    { code: "ENFP", name: "Campaigner" },
    { code: "ENTP", name: "Debater" },
    { code: "ESTJ", name: "Executive" },
    { code: "ESFJ", name: "Consul" },
    { code: "ENFJ", name: "Protagonist" },
    { code: "ENTJ", name: "Commander" },
  ]

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-6xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <Link href="/" className={`text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity ${pathname === '/' ? 'opacity-100' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity ${pathname === '/about' ? 'opacity-100' : ''}`}>
            About
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
              Types
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-white border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-2 w-max max-h-96 overflow-y-auto z-50 p-2">
              <div className="grid grid-cols-2 gap-2">
                {personalityTypes.map((type) => (
                  <Link
                    key={type.code}
                    href={`/personality/${type.code.toLowerCase()}`}
                    className="text-sm font-bold px-3 py-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap"
                  >
                    {type.code} - {type.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center gap-1 text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Link href="https://en.wikipedia.org/wiki/Autism" className="hidden md:block">
          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            Learn
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-4 border-black rounded-xl mt-2 max-w-6xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-[18px] font-bold hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="text-[18px] font-bold hover:opacity-70 transition-opacity">
              About
            </Link>
            <div className="border-t border-black pt-4">
              <div className="text-[16px] font-bold mb-2">Personality Types:</div>
              <div className="grid grid-cols-2 gap-2">
                {personalityTypes.map((type) => (
                  <Link
                    key={type.code}
                    href={`/personality/${type.code.toLowerCase()}`}
                    className="text-sm font-bold px-3 py-2 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {type.code}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
