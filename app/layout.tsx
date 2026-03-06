export const metadata = {
  title: "Living Better with DPN",
  description: "Real-life experience managing diabetes and diabetic peripheral neuropathy."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily: "Arial", margin: 0, padding: 20}}>
        {children}
      </body>
    </html>
  )
}