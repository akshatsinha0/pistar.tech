"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@/assets/images/logo/logo_02.svg";
import logo_2 from "@/assets/images/logo/logo-white.png";
import icon_1 from "@/assets/images/icon/icon_14.svg";
import icon_2 from "@/assets/images/icon/icon_15.svg";
import menu_data from "@/data/menu-data";
import { usePathname } from "next/navigation";

/***
 *here,navbar will renders the primary nav and highlights the active section.
 * Active state formations applied:->
 *(i)font weight more,slightly larger via scale, &an underline that comes
**/
const Navbar = ({ logo_white = false }: { logo_white?: boolean }) => {
  const pathname=usePathname();
//flash to #4739fd(logs's blue colour') on unhover time, then return to base color once
  const flashTimers=React.useRef(new WeakMap<HTMLElement,number>()).current;
  const handleUnhover=(e: React.MouseEvent<HTMLElement>) => {
    const el= e.currentTarget as HTMLElement;
    el.classList.add("nav-link--unhover-flash");
    const existing = flashTimers.get(el);
    if (existing) window.clearTimeout(existing);
    const id=window.setTimeout(()=>{
      el.classList.remove("nav-link--unhover-flash");
      flashTimers.delete(el);
    },180);
    flashTimers.set(el,id);
  };

  const isPathActive = (path?: string) => {
    if(!path) return false;
    if(path=== "/") return pathname === "/";
    return pathname?.startsWith(path);
  };
  const isMenuActive=(menu: any) => {
    if(isPathActive(menu.link)) return true;
    if(menu?.dropdown_menus?.some((dm: any) => isPathActive(dm.link))) return true;
    if(menu?.mega_menus?.some((mm: any) => mm.menus?.some((sm: any) => isPathActive(sm.link))))
      return true;
    if(
      menu?.dropdown_submenus?.some(
        (dm: any) => isPathActive(dm.link) || dm.sub_menus?.some((sm: any) => isPathActive(sm.link))
      )
    )
      return true;

    return false;
  };

  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link href="/" className="d-block">
            <Image
              className=""
              width="165"
              height="60"
              src={logo_white ? logo_2 : logo}
              alt="logo"
            />
          </Link>
        </div>
      </li>
      {menu_data.map((menu) => {
        const active=isMenuActive(menu);
        const parentClasses=`nav-link dropdown-toggle ${active ? "nav-link--active" : ""}`;
        return (
          <li
            key={menu.id}
            className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
              menu.mega_menu ? "dropdown mega-dropdown-sm":""
            } ${menu.sub_dropdown ? "dropdown" :""}`}
          >
            {menu.dropdown&& (
              <>
<a
                  className={parentClasses}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
onMouseLeave={handleUnhover}
                  {...(active ? {"aria-current":"page"}:{})}
                >
                  {menu.title}
                </a>
                <ul className="dropdown-menu">
                  {menu.dropdown_menus?.map((dm: any,i: number) => (
                    <li key={i}>
                      <Link
                        href={dm.link}
                        className={`dropdown-item ${pathname === dm.link ? "active" : ""}`}
                      >
                        <span>{dm.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {menu.mega_menu && (
              <>
<a
                  className={parentClasses}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
onMouseLeave={handleUnhover}
                  {...(active ? { "aria-current": "page" } : {})}
                >
                  {menu.title}
                </a>
                <ul className="dropdown-menu">
                  <li className="row gx-1">
                    {menu.mega_menus?.map((mm: any) => (
                      <div key={mm.id} className="col-lg-4">
                        <div className="menu-column">
                          <ul className="style-none mega-dropdown-list">
                            <span
                              className="font-weight-bold dropdown-item bg-spancolor"
                              style={{ fontWeight: "500", fontSize: "20px" }}
                            >
                              {mm.subtitle}
                            </span>{" "}
                            {mm.menus.map((sm: any, i: number) => (
                              <li key={i}>
                                <Link
                                  href={sm.link}
                                  className={`dropdown-item ${pathname === sm.link ? "active" : ""}`}
                                >
                                  <span>{sm.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </li>
                </ul>
              </>
            )}
            {/* add 2sub menu component start*/}
            {menu.sub_dropdown && (
              <>
<a
                  className={parentClasses}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
onMouseLeave={handleUnhover}
                  {...(active ? { "aria-current": "page" } : {})}
                >
                  {menu.title}
                </a>
                <ul className="dropdown-menu">
                  {menu.dropdown_submenus?.map((dm: any, i: number) => (
                    <li key={i} className={`${dm.sub_menus ? "dropdown" : ""}`}>
                      {dm.sub_menus ? (
                        <>
                          <a
                            className="nav-link dropdown-toggle"
                            style={{
                              color: "#fff",
                              fontWeight: "400",
                              margin: "0px",
                              padding: "8px 16px",
                            }}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                          >
                            {dm.title}
                          </a>
                          <ul className="dropdown-menu">
                            {dm.sub_menus.map((aa: any, j: number) => (
                              <li key={j}>
                                <Link
                                  href={aa.link}
                                  style={{ padding: "0px 15px" }}
                                  className={`dropdown-item ${pathname===aa.link ? "active" : ""}`}
                                >
                                  <span>{aa.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          href={dm.link}
                          className={`dropdown-item ${pathname === dm.link ? "active" : ""}`}
                        >
                          <span>{dm.title}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {/*2sub end part */}
            {!menu.dropdown && !menu.mega_menu && !menu.sub_dropdown && (
<Link
                className={`nav-link ${active?"nav-link--active":""}`}
                href={menu.link}
                role="button"
onMouseLeave={handleUnhover}
                {...(active ? {"aria-current":"page"}:{})}
              >
                {menu.title}
              </Link>
            )}
          </li>
        );
      })}
      <li className="d-md-none ps-2 pe-2 text-center">
        {/* <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span className="flex-fill text-center">Signup</span>
          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-right"></i>
          </div>
        </a> */}
        <ul className="style-none contact-info m0 pt-30">
          <li className="d-md-block">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#BookDemo"
              className="btn-two tran3s w-100"
            >
              Book a Demo
            </a>
          </li>
    {/* removed the commented part below*/}
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
