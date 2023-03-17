import '../styles/globals.css'
import Navigation from './components/navigation/Navigation'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Wordle Pokemon</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
