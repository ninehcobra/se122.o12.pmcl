// 'use client'
import './globals.scss'


import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/homecomponent/footer';
import { usePathname } from 'next/navigation';
import { ReduxProvider } from "./components/homecomponent/reduxprovider"
import ScrollToTopButton from "./components/homecomponent/scrolltotop"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/03244eb91d.js" crossOrigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
        {/* <script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script> */}
      </head>
      <body>
        <ScrollToTopButton />
        <ReduxProvider>

          {children}
        </ReduxProvider>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />


        <Footer></Footer>
      </body>
    </html>
  )
}
