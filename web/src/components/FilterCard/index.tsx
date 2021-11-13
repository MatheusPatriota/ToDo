import React from "react";
import { FilterCardStyles } from "./styles";
import { FaFilter } from "react-icons/fa";

type FilterCardTypes = {
  description: string,
}

export default function FilterCard(props: FilterCardTypes) {
  return (
    <>
      <FilterCardStyles>
        <FaFilter />
        <span>{props.description}</span>
      </FilterCardStyles>
    </>
  );
}
