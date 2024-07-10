// DONE REVIEWING: GITHUB COMMIT
import Image from "next/image"

const Footer = function Footer() {
  return (
    <footer className="mx-auto mb-10 mt-32 max-w-xl-7 px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-xl-2">
        <h2 className="text-center text-xl-3 font-bold tracking-tight text-foreground sm:text-xl-4">
          شكراً <span className="text-secondary">لكم</span>.
        </h2>
        <div className="mt-8 flex items-center justify-center gap-2">
          <Image
            src="/assets/omq-logo-slate-950.png"
            alt="Logo"
            fill
            className="!static !h-auto !w-8"
          />
          <p className="text-lg font-medium text-foreground">
            بواسطة{" "}
            <a
              href="mailto:obaidah.alsoub@bapcoenergies.com"
              className="font-medium text-secondary">
              عُبيدة ماهر
            </a>{" "}
            و{" "}
            <a
              href="https://instagram.com/shawqicauses"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-secondary">
              شوقي حاتم
            </a>
            .
          </p>
        </div>
        <p />
      </div>
    </footer>
  )
}

export default Footer
