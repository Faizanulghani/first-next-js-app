import "../globals.css";
import Navigation from "./components/Navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="max-w-[80%] mx-auto">
          <Navigation />

          {children}
        </div>
      </body>
    </html>
  );
}
