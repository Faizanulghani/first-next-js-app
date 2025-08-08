import "../globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[80%] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
