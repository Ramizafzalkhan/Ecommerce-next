import Navbar from './components/navbar/page'
import GlobalState from './context'
import './globals.css'



// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalState>
          <Navbar />
          <h1>Home page</h1>
          <main>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
