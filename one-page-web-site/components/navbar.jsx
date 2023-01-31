import React from "react";

function Navbar() {
  return (
    <div>
      <div className="text-[white] justify-end flex gap-5 place-items-center text-[16px] font-primary-font">
        <a href="#sales">Борлуулах </a>
        <a href="#">Автоматжуулах</a>
        <a href="#">Зөвлөгөө авах</a>
        <a href="#">Холбоо барих</a>
        <button className="bg-[#7647EA] text-[white] text-[13px] i rounded-[32px] px-3 py-2  grid place-items-center font-primary-font">
          ДЭЛГҮҮР НЭЭХ
        </button>
      </div>
    </div>
  );
}

export default Navbar;
