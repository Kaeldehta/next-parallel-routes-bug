import { ReactNode } from "react";

const RootLayout = ({ children, slot }: {children: ReactNode, slot: ReactNode}) => {
  return (
    <html>
      <head />
      <body>
        {children}
        {slot}
      </body>
    </html>
  )
}

export default RootLayout;