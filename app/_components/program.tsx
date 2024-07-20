// DONE REVIEWING: GITHUB COMMIT 3️⃣
import {ArrowLeftIcon} from "lucide-react"

const programs = [
  {
    id: 0,
    description: "المطالبة بوضع آلية مناسبة وواضحة للتقييم السنوي والمكافأة التحفيزية (البونس)."
  },
  {
    id: 1,
    description: "المطالبة بوضع توقيت زمني محدد للترقية على الشواغر المتاحة."
  },
  {
    id: 2,
    description: "المطالبة بزيادة علاوة النوبات."
  },
  {
    id: 3,
    description: "المطالبة بعلاوة العمل وقت الظهيرة خلال شهري يوليو وأغسطس لموظفين النوبات."
  },
  {
    id: 4,
    description: "التوسع في الدورات التدريبية الداخلية والخارجية وتعزيز الميزانية لذلك."
  },
  {
    id: 5,
    description: "المطالبة بعلاوة النادي السنوية لمن هم من الدرجة السادسة وما فوق."
  },
  {
    id: 6,
    description: "المطالبة باسترجاع المخيم الربيعي."
  },
  {
    id: 7,
    description: "المطالبة باسترجاع الحفل السنوي للشركة."
  },
  {
    id: 8,
    description: "المطالبة بزيادة عدد البدلات للموظفين إلى ست بدلات."
  },
  {
    id: 9,
    description: "المطالبة بزيادة قيمة كوبون حذاء السلامة."
  },
  {
    id: 10,
    description: "إعادة تصميم وتطوير الموقع الإلكتروني ليتناسب مع متطلبات الموظفين واحتياجاتهم."
  },
  {
    id: 11,
    description: "إعادة تفعيل قنوات وسائل التواصل الاجتماعي."
  }
]

const Program = function Program() {
  return (
    <div className="mx-auto mt-32 max-w-xl-7 px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-xl-2 lg:mx-0">
        <h2 className="text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
          البرنامج الانتخابي
        </h2>
      </div>
      <dl className="mx-auto mt-16 grid max-w-xl-2 grid-cols-1 gap-8 leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        {programs.map((program) => (
          <div key={program.id} className="relative pr-9">
            <dt className="inline text-xl font-semi-bold text-foreground">
              <ArrowLeftIcon
                aria-hidden="true"
                className="absolute right-1 top-1 h-5 w-5 text-secondary"
              />
              {program.id + 1}
            </dt>{" "}
            <dd className="inline text-lg">{program.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Program
