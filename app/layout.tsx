// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {IBM_Plex_Sans_Arabic} from "next/font/google"
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"

const FONT = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="ar" dir="rtl">
      <head />
      <body className={FONT.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
