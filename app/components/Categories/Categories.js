"use client";

import CategoriesItem from "./CategoriesItem";
import { Box } from "@chakra-ui/react";
import { categoriesStyles } from "./styles";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
  },
  {
    label: "Windmills",
    icon: GiWindmill,
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
  },
  {
    label: "Countryside",
    icon: TbMountain,
  },
  {
    label: "Pools",
    icon: TbPool,
  },
  {
    label: "Islands",
    icon: GiIsland,
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
  },
  {
    label: "Skiing",
    icon: FaSkiing,
  },
  {
    label: "Castles",
    icon: GiCastle,
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
  },
  {
    label: "Camping",
    icon: GiForestCamp,
  },
  {
    label: "Arctic",
    icon: BsSnow,
  },
  {
    label: "Desert",
    icon: GiCactus,
  },
  {
    label: "Barns",
    icon: GiBarn,
  },
  {
    label: "Lux",
    icon: IoDiamond,
  },
];

const Categories = () => {
  return (
    <Box as={"div"} sx={categoriesStyles}>
      {categories.map(({ label, icon }) => (
        <CategoriesItem key={label} icon={icon} label={label} />
      ))}
    </Box>
  );
};

export default Categories;
