// DONE REVIEWING: GITHUB COMMIT 2️⃣
import {ArrowLeftIcon} from "lucide-react"

const values = [
  {
    id: 0,
    name: "ﺍﻟﻤﺼﺪﺍﻗﻴﺔ",
    description: "انتهج ﺍﻟﺼﺪﻕ ﺑﺎﻟﻘﻮﻝ ﻭﺍﻟﻌﻤﻞ، ﻭﺃﻋﻤﻞ ﺑﻜﻞ ﺷﻔﺎﻓﻴﺔ ﻣﻊ ﺍﻟﺠﻤﻴﻊ"
  },
  {
    id: 1,
    name: "المسؤولية",
    description: "التزم ﺑﻜﺎﻣﻞ مسؤولياتي وواجباتي ﺗﺠﺎﻩ ﺯﻣﻼﺋﻲ ﻭﺯﻣﻴﻼﺗﻲ"
  },
  {
    id: 2,
    name: "النزاهة",
    description: "الالتزام ﺑﺎﻻﺳﺘﻘﺎﻣﺔ ﺑﺎﻟﻌﻤﻞ والالتزام ﺑﺎﻟﻘﻮﺍﻧﻴﻦ والمعايير ﺍﻷﺧﻼﻗﻴﺔ"
  },
  {
    id: 3,
    name: "الاحترام",
    description: "الاحترام ﻫﻮ ﺃﺳﺎﺱ ﺍﻟﺘﻌﺎﻣﻞ ﻣﻊ ﺍﻟﺠﻤﻴﻊ"
  },
  {
    id: 4,
    name: "ﺍﻟﻘﻮﺓ",
    description: "ﺍﻟﻤﺤﺎﻓﻈﺔ ﻋﻠﻰ ﺣﻘﻮﻕ ﺍﻟﻌﺎﻣﻠﻴﻦ ﺑﻜﻞ ﻗﻮﺓ ﻭﺣﺰﻡ"
  }
]

const Values = function Values() {
  return (
    <div className="mx-auto mt-32 max-w-xl-7 px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-xl-2 lg:mx-0">
        <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
          المبادئ والقيم
        </h2>
      </div>
      <dl className="mx-auto mt-16 grid max-w-xl-2 grid-cols-1 gap-8 leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        {values.map((value) => (
          <div key={value.id} className="relative pr-9">
            <dt className="inline text-xl font-semi-bold text-foreground">
              <ArrowLeftIcon
                aria-hidden="true"
                className="absolute right-1 top-1 h-5 w-5 text-secondary"
              />
              {value.name}
            </dt>{" "}
            <dd className="inline text-lg">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Values
