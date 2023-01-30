import React from "react";

function Menu() {
  return (
    <div className="flex w-screen h-68  place-items-center justify-end bg-[#0C0C0C]">
      <div className="text-[white] justify-end flex gap-5 place-items-center">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">service</a>
        <button className="bg-primary-color text-[black] text-[16px] i rounded-[15px] w-[116px] h-[36px] grid place-items-center font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Menu;
