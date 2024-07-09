// DONE REVIEWING: GITHUB COMMIT 1️⃣
import Image from "next/image"
import Link from "next/link"
import {Fragment, HTMLAttributes} from "react"
import {cn} from "../../lib/utils"

const Highlight = function Highlight({className, children}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("relative text-foreground", className)}>
      <div className="absolute left-0 right-0 top-1/2 z-10 h-1/2 w-full -translate-y-1/2 bg-gradient-to-br from-secondary-light/50 to-secondary/50" />
      <span className="relative z-20">{children}</span>
    </span>
  )
}

const Header = function Header() {
  return (
    <Fragment>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-xl-7 items-center justify-center p-6 lg:px-8">
          <div className="flex items-center justify-center lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Bapco Gas</span>
              <Image
                src="/assets/logo.png"
                alt="Bapco Logo"
                fill
                className="!static !h-10 !w-auto lg:!h-20"
              />
            </Link>
          </div>
        </nav>
      </header>
      <main className="isolate">
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-background shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-xl-7 px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-xl-2 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-xl-2 text-xl-4 font-bold !leading-[1.3] tracking-tight text-foreground sm:text-xl-6 lg:col-span-2 xl:col-auto">
                <Highlight>نُصلح لنبقى</Highlight>، عبيدة ماهر العنزي. المعتزم للترشح عن نقابة عمال
                بابكو غاز.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-muted-foreground">
                  ﺍﻷﺧﻮﺓ ﻭﺍﻷﺧﻮﺍﺕ ﺃﻋﻀﺎﺀ ﻧﻘﺎﺑﺔ ﺑﺎﺑﻜﻮ ﻟﻠﻐﺎﺯ ﺍﻧﻄﻼﻗًﺎ ﻣﻦ ﻭﺍﺟﺒﻲ ﻭﺷﻌﻮﺭﻱ ﺑﺎﻟﻤﺴﺌﻮﻟﻴﺔ ﺗﺠﺎﻩ
                  ﺍﻟﻌﺎﻣﻠﻴﻦ ﻓﻲ ﺷﺮﻛﺔ ﺑﺎﺑﻜﻮ ﻟﻠﻐﺎﺯ ﻳﻄﻴﺐ ﻟﻲ ﺃﻥ ﺃﻋﻠﻦ ﻟﻜﻢ ﺧﻮﺽ انتخابات ﺍﻟﻨﻘﺎﺑﺔ ﺍﻟﻌﻤﺎﻟﻴﺔ
                  ﻟﻌﺎﻡ 2024، والله ﻭﻟﻲ التوفيق.
                </p>
              </div>
              <div className="mt-10 overflow-hidden rounded-xl-2 bg-blue-600/10 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
                <Image
                  src="/assets/image.png"
                  alt="Obaidah AL-Enezi"
                  fill
                  className="!static aspect-[6/5] !h-auto w-full max-w-lg object-cover object-top mix-blend-darken"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background sm:h-32" />
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Header
