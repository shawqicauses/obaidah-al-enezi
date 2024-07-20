// DONE REVIEWING: GITHUB COMMIT 5️⃣
import Image from "next/image"
import {HTMLAttributes} from "react"
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
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-background shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-xl-7 px-6 py-32 sm:py-40 lg:px-8">
        <h1 className="mb-20 text-center text-xl-5 font-bold tracking-tight text-foreground sm:text-xl-7 md:text-xl-9">
          <Highlight>نُصلح لتبقى</Highlight>
        </h1>
        <div className="mx-auto max-w-xl-2 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-20 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <p className="mt-0 max-w-xl-2 text-xl-2 !leading-relaxed text-foreground sm:text-xl-3 lg:col-span-2 lg:mt-20 xl:col-auto">
            ﺍﻷﺧﻮﺓ ﻭﺍﻷﺧﻮﺍﺕ ﺃﻋﻀﺎﺀ ﻧﻘﺎﺑﺔ ﺑﺎﺑﻜﻮ ﻟﻠﻐﺎﺯ ﺍﻧﻄﻼﻗًﺎ ﻣﻦ ﻭﺍﺟﺒﻲ ﻭﺷﻌﻮﺭﻱ بالمسؤولية ﺗﺠﺎﻩ ﺍﻟﻌﺎﻣﻠﻴﻦ
            ﻓﻲ ﺷﺮﻛﺔ ﺑﺎﺑﻜﻮ ﻟﻠﻐﺎﺯ ﻳﻄﻴﺐ ﻟﻲ ﺃﻥ ﺃﻋﻠﻦ ﻟﻜﻢ ﺧﻮﺽ انتخابات ﺍﻟﻨﻘﺎﺑﺔ ﺍﻟﻌﻤﺎﻟﻴﺔ ﻟﻌﺎﻡ 2024، والله
            ولي التوفيق.
          </p>
          <div className="mt-10 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-xl-2 font-medium !leading-[1.3] tracking-tight text-foreground sm:text-xl-3">
              عُبيدة ماهر
            </p>
            <p className="mt-2 text-xl leading-none text-muted-foreground">دائرة العمليات</p>
          </div>
          <div className="mt-10 flex items-end justify-end overflow-hidden rounded-xl-2 bg-blue-600/10 sm:mt-20 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
            <Image
              src="/assets/image.png"
              alt="Obaidah AL-Enezi"
              fill
              className="!static aspect-[9/12] !h-auto w-full max-w-lg object-cover object-top mix-blend-darken"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background sm:h-32" />
      </div>
    </div>
  )
}

export default Header
