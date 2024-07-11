// DONE REVIEWING: GITHUB COMMIT 1️⃣

import Image from "next/image"
import Link from "next/link"

const Navigation = function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-xl-7 items-center justify-center p-6 lg:px-8">
        <div className="flex items-center justify-center gap-5 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Bapco Gas</span>
            <Image src="/assets/logo.png" alt="Bapco Logo" fill className="!static !h-32 !w-auto" />
          </Link>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Bar Gas</span>
            <Image src="/assets/logo-2.png" alt="Bar Logo" fill className="!static !h-32 !w-auto" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
