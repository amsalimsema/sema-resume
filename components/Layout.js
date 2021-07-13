import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1 className="text-center">
              <span>apercu nav</span>
            </h1>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p className="text-center">Copyright 2021 :)</p>
      </footer>
    </div>
  );
}
