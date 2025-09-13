import "./globals.css";
export const metadata = {
  title: {
    template: "%s | Faizan Ul Ghani",
    default: "Faizan Ul Ghani",
  },
  description: "Hello World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-500 p-4 text-white">Header</header>
        {children}
        <footer className="bg-blue-500 p-4 text-white">Footer</footer>
      </body>
    </html>
  );
}
