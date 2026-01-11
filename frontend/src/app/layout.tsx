import "./globals.css";
import type { ReactNode } from "react";
import { 
  Bitcount_Prop_Double,
  Bitcount_Prop_Single,
  Press_Start_2P,
  VT323,
  Play
} from "next/font/google";

export const bitcountDouble = Bitcount_Prop_Double({
  weight: "400",
  subsets: ["latin"],
});
export const vt = VT323({
  weight: "400",
  subsets: ["latin"],
});
export const play = Play({
  weight: "400",
  subsets: ["latin"],
});

export const bitcountSingle = Bitcount_Prop_Single({
  weight: "400",
  subsets: ["latin"],
});

export const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"]
});

export const fonts = {
  bitcountDouble,
  bitcountSingle,
  pressStart

};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pressStart.className}>
        {children}
      </body>
    </html>
  );
}
