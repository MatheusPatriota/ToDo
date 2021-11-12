import React from "react";
import { FilterCardStyles } from "./styles";
import { FaFilter } from "react-icons/fa";

export default function FilterCard() {
  return (
    <>
      <FilterCardStyles>
        <FaFilter />
        <span>Hoje</span>
      </FilterCardStyles>
    </>
  );
}
