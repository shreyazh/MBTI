import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto">
          {/* Bottom */}
          <div className=" border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Shreyash Srivastva. All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  )
}
