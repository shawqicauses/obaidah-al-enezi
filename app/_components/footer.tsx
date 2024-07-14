// DONE REVIEWING: GITHUB COMMIT 3️⃣
import Image from "next/image"

const Footer = function Footer() {
  return (
    <footer className="mx-auto mb-10 mt-32 max-w-xl-7 px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-xl-2">
        <h2 className="text-center text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
          شكراً لكم.
        </h2>
        <div className="mt-5 flex w-full flex-wrap justify-center gap-5 text-lg font-medium">
          <span>تواصل معي بالضغط على:</span>
          <a href="mailto:obaidah.alsoub@bapcoenergies.com">الإيميل</a>
          <span>أو</span>
          <a href="tel:+97339999728">النقال</a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <Image
            src="/assets/omq-logo-slate-950.png"
            alt="Logo"
            fill
            className="!static !h-auto !w-8"
          />
          <p className="text-lg font-medium text-foreground">
            بواسطة <span className="font-medium">عُبيدة ماهر</span> و{" "}
            <span className="font-medium">شوقي حاتم</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
