import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const navEl = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        navEl?.classList.add("not-top");
      } else {
        navEl?.classList.remove("not-top");
      }
    });
  }, []);
  const router = useRouter();

  return (
    <nav className="site-nav">
      <div className="container">
        <div className="site-navigation">
          <a href="index.html" className="logo m-0">
            Tour <span className="text-primary">.</span>
          </a>
          <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === "/services" ? "active" : ""}>
              <Link href="/services">Services</Link>
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>

          <a
            href="#"
            className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
