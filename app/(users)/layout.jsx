import "../globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: {
    default: "Faizan | Learn Web Development",
    template: "%s | Faizan Ul Ghani",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
