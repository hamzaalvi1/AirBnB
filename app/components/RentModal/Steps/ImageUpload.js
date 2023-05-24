"use client";
import { Flex, Box } from "@chakra-ui/react";
import { TbPhotoPlus } from "react-icons/tb";
import { CldUploadWidget } from "next-cloudinary";
import { imageUploadStyles } from "../RentModalStyles";
import { RentConstants } from "@/app/config/constants";
import Image from "next/image";

const uploadPreset = "nrlgxtxc";

const ImageUpload = (props) => {
  const { handleValuesChange, values } = props;

  const handleUpload = (response) => {
    if (response) {
      handleValuesChange(RentConstants.IMAGES, response?.info?.secure_url);
    }
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open, error, results }) => {
        return (
          <Flex
            align={"center"}
            justify={"center"}
            flexFlow={"column"}
            sx={imageUploadStyles}
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={50} />
            <Box fontWeight={"bold"} fontSize={"lg"}>
              Click to Upload
            </Box>
            {values?.imgSrc && (
              <Box
                pos={"absolute"}
                top={0}
                left={0}
                width={"100%"}
                height={"100%"}
              >
                <Image
                  src={values?.imgSrc}
                  fill
                  alt="imgSrc"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            )}
          </Flex>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
