"use client";

import CategoriesItem from "./CategoriesItem";
import { Box, Container } from "@chakra-ui/react";
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
import { useSearchParams } from "next/navigation";

export const categoriesList = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is close to the windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is close to the modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is close to the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property is close to the poolside",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is close to the island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to the lakeside",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is close to the skiing side",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is close to the castles side",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is close to the cave",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property is close to the camping",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is close to the arctic",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is close to the desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is close to the barn side",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxury",
  },
];

const Categories = () => {
  const params = useSearchParams();
  return (
    <Container maxW={"container.2xl"}>
      <Box as={"div"} sx={categoriesStyles}>
        {categoriesList.map(({ label, icon }) => (
          <CategoriesItem
            key={label}
            icon={icon}
            label={label}
            selected={params.get("category") == label}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Categories;
