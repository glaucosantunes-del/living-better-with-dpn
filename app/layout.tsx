export const metadata = {
  title: "Living Better with DPN",
  description: "Real-life experience with diabetes and diabetic peripheral neuropathy."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "40px" }}>
        {children}
      </body>
    </html>
  )
}