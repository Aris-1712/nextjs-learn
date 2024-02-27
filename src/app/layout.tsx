import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <html>
      <body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Base Layout</h1>
          <div>
            <Link style={{ marginRight: 16 }} href="/">
              Home
            </Link>
            <Link style={{ marginRight: 16 }} href="/services-provided">
              Service
            </Link>
            <Link href="/about-us">About Us</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
};

export default Layout;
