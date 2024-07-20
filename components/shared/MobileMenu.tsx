import { useState, useEffect } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
import Button from "../ui/Button";
import { navLinks } from "@/constants";
import Link from "next/link";
import Route from "../ui/Route";
const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <div className="md:hidden" onClick={mobileMenuHandler}>
        {openMobileMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
      </div>
      {openMobileMenu ? (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="abbsolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
