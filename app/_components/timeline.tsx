// DONE REVIEWING: GITHUB COMMIT

const timeline = [
  {id: 0, name: "ﺑﺎﺑﻜﻮ ﻟﻠﻐﺎﺯ", type: "خبرة عملية"},
  {id: 1, name: "ﻣﻜﺘﺐ ﻭﻟﻲ ﺍﻟﻌﻬﺪ", type: "خبرة عملية"},
  {id: 2, name: "ﺣﻠﺒﺔ البحرين ﺍﻟﺪﻭﻟﻴﺔ", type: "خبرة عملية"},
  {id: 3, name: "ﺷﺮﻛﺔ الخليج ﻟﺼﻨﺎﻋﺔ البتروكيماويات", type: "خبرة عملية"},
  {id: 4, name: "ﺑﻨﻚ البحرين ﻟﻠﺘﻨﻤﻴﺔ", type: "خبرة عملية"},
  {id: 5, name: "ﻫﻨﺪﺳﺔ ﻣﻴﻜﺎﻧﻴﻜﻴﺔ - ﺟﺎﻣﻌﺔ البحرين", type: "خبرة علمية"}
]

const Timeline = function Timeline() {
  return (
    <div className="mx-auto -mt-8 max-w-xl-7 px-6 lg:px-8">
      <div className="mx-auto grid max-w-xl-2 grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timeline.map((element) => (
          <div key={element.id}>
            <div className="flex items-center text-sm font-semi-bold leading-6 text-secondary">
              <svg viewBox="0 0 4 4" aria-hidden="true" className="ml-4 h-1 w-1 flex-none">
                <circle r={2} cx={2} cy={2} fill="currentColor" />
              </svg>
              {element.type}
              <div
                aria-hidden="true"
                className="absolute -mr-2 h-px w-screen translate-x-full bg-foreground/10 sm:-mr-4 lg:static lg:-ml-6 lg:mr-8 lg:w-auto lg:flex-auto lg:-translate-x-0"
              />
            </div>
            <p className="mt-6 text-lg font-semi-bold leading-8 tracking-tight text-foreground">
              {element.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
