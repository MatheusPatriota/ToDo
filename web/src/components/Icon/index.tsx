import React from "react";
import { IconStyles } from "./styles";
// icons
import { CgGym } from "react-icons/cg";
import {
  FaShoppingCart,
  FaShoppingBag,
  FaPlaneDeparture,
  FaPencilAlt,
} from "react-icons/fa";
import { IoFootballSharp } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";

type IconType = {
  iconNumber: number;
};

export default function Icon(props: IconType) {
  const num = props.iconNumber -1;
  const icons = [
    <IoFootballSharp />,
    <HiOutlineClipboardList />,
    <GiForkKnifeSpoon />,
    <FaShoppingBag />,
    <BsFillPeopleFill />,
    <FaShoppingCart />,
    <FaPlaneDeparture />,
    <CgGym />,
    <FaPencilAlt />,
  ];
  const selectedIcon = icons[num];

  return (
    <>
      <IconStyles>
        {console.log(icons.values)}
        {selectedIcon}
      </IconStyles>
    </>
  );
}
