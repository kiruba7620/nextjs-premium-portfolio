import { Providers } from "./providers"
import Navbar from "../components/Navbar"
import { Toaster } from "react-hot-toast" 
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased transition-colors duration-300">
        <Providers>
          <Navbar/>
          <main className="pt-[80px] bg-white text-black dark:bg-black dark:text-white">
            {children}
             <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#0f172a',
                color: '#fff',
                border: '1px solid #14b8a6'
              }
            }}
          />
          </main>
        </Providers>
      </body>
    </html>
  )
}
