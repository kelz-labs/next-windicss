import { ReactNode } from "react";
import "windi.css";
import "~/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="w-full flex justify-center min-h-screen items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
