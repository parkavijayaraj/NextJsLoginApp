export const metadata = {
  title: "Next.js Auth App",
  description: "Authentication system with MongoDB and JWT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        {/* Header */}
        <header style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
          <h1>My NextJS App</h1>
        </header>

        {/* Main Content */}
        <main style={{ padding: "2rem" }}>{children}</main>

        {/* Footer */}
        <footer style={{ backgroundColor: "#f5f5f5", padding: "1rem", marginTop: "2rem", textAlign: "center" }}>
          &copy; {new Date().getFullYear()} My Next.js Auth App
        </footer>
      </body>
    </html>
  );
}