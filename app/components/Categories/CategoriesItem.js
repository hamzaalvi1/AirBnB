"use client";
import { Box } from "@chakra-ui/react";
import { categoriesItemStyles, selectedStyles } from "./styles";
import { useSearchParams, useRouter } from "next/navigation";
import { parseQueryParams, appendQueryParams } from "@/app/utils";

function CategoriesItem(props) {
  const { icon: Icon, label, selected } = props;
  const params = useSearchParams();
  const router = useRouter();

  const handleAddQueryParams = () => {
    let currentQueryParams = params ? parseQueryParams(params) : {};
    let updatedQueryParams = { ...currentQueryParams, category: label };
    updatedQueryParams =
      params.get("category") == label
        ? delete updatedQueryParams.category
        : updatedQueryParams;
    let url = appendQueryParams(
      "/",
      updatedQueryParams,
      {},
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <Box
      as={"div"}
      sx={{ ...categoriesItemStyles, ...(selected && selectedStyles) }}
      onClick={handleAddQueryParams}
    >
      <Icon size={24} />
      <Box as={"span"} fontSize={"sm"} fontWeight={"bold"}>
        {" "}
        {label}
      </Box>
    </Box>
  );
}

export default CategoriesItem;
