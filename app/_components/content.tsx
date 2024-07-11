// DONE REVIEWING: GITHUB COMMIT 1️⃣
import Image from "next/image"

const Content = function Content() {
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-xl-7 px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-xl-2 grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
              الرسالة <br /> والرؤيــــــــــة
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              ﺗﺮﺳﻴﺦ ﺍﻟﻌﻤﻞ ﺍﻟﻨﻘﺎﺑﻲ ﻣﻦ ﺃﺟﻞ ﺧﻠﻖ بيئة ﻋﻤﻞ ﻋﺎﺩﻟﺔ ﻭﻣﻨﺘﺠﺔ ﻟﺘﺤﻘﻴﻖ ﻧﻤﻮ ﺍﺟﺘﻤﺎﻋﻲ ﻭﺍﻗﺘﺼﺎﺩﻱ ﻣﻠﻤﻮﺱ
              ﻣﻊ ﺗﺤﻘﻴﻖ ﺍﻟﺸﻔﺎﻓﻴﺔ ﻓﻲ ﺟﻤﻴﻊ أعمالنا. <br /> <br /> أتطلع ﻟﺨﻠﻖ ﺻﻮﺕ ﺍﺟﺘﻤﺎﻋﻲ ﻗﻮﻱ ﻟﺠﻤﻴﻊ
              ﺃﻋﻀﺎﺋﻨﺎ ﻣﻦ ﺧﻼﻝ حراك نقابي ﻣﻨﻈﻢ ومتنام.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:mr-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="https://bapco-phase2.objects.frb.io/Launch-images/_1764xAUTO_fit_center-center_90_none/47220/BE-About-Us-Agile.webp"
                alt="Message and Vision - 01"
                fill
                className="!static aspect-[7/5] !h-auto !w-[37rem] !max-w-none rounded-xl-2 bg-border-light object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:mr-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="https://bapco-phase2.objects.frb.io/Launch-images/_1764xAUTO_fit_center-center_90_none/47221/BE-About-Us-Innovative.webp"
                  alt="Message and Vision - 02"
                  fill
                  className="!static aspect-[4/3] !h-auto !w-[24rem] !max-w-none flex-none rounded-xl-2 bg-border-light object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="https://bapco-phase2.objects.frb.io/Launch-images/_1764xAUTO_fit_center-center_90_none/47287/BE-About-Us-Responsible.webp"
                  alt="Message and Vision - 03"
                  fill
                  className="!static aspect-[7/5] !h-auto !w-[37rem] max-w-none flex-none rounded-xl-2 bg-border-light object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="https://bapco-phase2.objects.frb.io/Launch-images/_1360xAUTO_fit_center-center_100_none/47223/BE-About-Us-Our-Chairman.webp"
                  alt="Message and Vision - 04"
                  fill
                  className="!static aspect-[4/3] !h-auto !w-[24rem] max-w-none rounded-xl-2 bg-border-light object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
