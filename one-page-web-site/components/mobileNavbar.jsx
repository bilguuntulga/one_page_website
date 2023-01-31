import Image from "next/image";
import React from "react";
import Menu from "../public/images/menu.png";
import Close from "../public/images/close.png";

function MobileNavbar() {
  const [isOpennNvbar, setIsOpenNavbar] = React.useState(false);

  return (
    <div className="grid place-items-center justify-center">
      {isOpennNvbar ? (
        ""
      ) : (
        <Image
          className="white__image mt-5"
          onClick={() => setIsOpenNavbar(true)}
          src={Menu}
          alt=""
        />
      )}
      <div className={isOpennNvbar ? "open__navbar" : " close__navbar"}>
        {isOpennNvbar ? (
          <Image
            className="white__image "
            onClick={() => setIsOpenNavbar(false)}
            src={Close}
            alt=""
          />
        ) : (
          ""
        )}
        <div className="menu__text">
          <a href="#sales">Борлуулах </a>
          <br />
          <a href="#">Автоматжуулах</a>
          <br />
          <a href="#">Зөвлөгөө авах</a>
          <br />
          <a href="#">Холбоо барих</a>
        </div>
      </div>
      sdaf
    </div>
  );
}

export default MobileNavbar;
