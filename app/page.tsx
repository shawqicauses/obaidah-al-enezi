// DONE REVIEWING: GITHUB COMMIT 4️⃣

import Content from "./_components/content"
import Footer from "./_components/footer"
import Header from "./_components/header"
import Navigation from "./_components/navigation"
import Program from "./_components/program"
import Timeline from "./_components/timeline"
import Values from "./_components/values"

const Page = async function Page() {
  return (
    <div className="bg-background">
      <Navigation />
      <main className="isolate">
        <Header />
        <Timeline />
        <Content />
        <Values />
        <Program />
        <Footer />
      </main>
    </div>
  )
}

export default Page
