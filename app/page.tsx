// DONE REVIEWING: GITHUB COMMIT 2️⃣

import Header from "./_components/header"
import Timeline from "./_components/timeline"

const Page = async function Page() {
  return (
    <div className="bg-background">
      <Header />
      <div className="isolate">
        <Timeline />
      </div>
    </div>
  )
}

export default Page
