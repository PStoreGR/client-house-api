import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "House Api",
  description: "Created by Efthymios Paloukas",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <div className="w-auto h-[100vh] flex flex-col items-center justify-center">
          { children }
        </div>
      </body>
    </html>
  );
}
