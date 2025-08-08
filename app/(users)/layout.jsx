import "../globals.css";
import Navigation from "./components/Navigation";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[80%] mx-auto">
          <Navigation />

          {children}
        </div>
      </body>
    </html>
  );
}
