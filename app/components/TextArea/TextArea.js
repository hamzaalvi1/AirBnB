"use client";
import { Textarea, Text } from "@chakra-ui/react";

function CustomTextArea(props) {
  const {
    label,
    name,
    placeholder,
    errorText,
    onChange,
    onBlur,
    value,
    resize,
    size = "md",
    error = false,
    required = false,
    readOnly = false,
    disabled = false,
    styleProps = {},
    labelStyles = {},
    ...rest
  } = props;
  return (
    <>
      {label && <Text sx={labelStyles}>{label}</Text>}
      <Textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        size={size}
        isInvalid={error}
        isRequired={required}
        isReadOnly={readOnly}
        isDisabled={disabled}
        border={"1px solid"}
        borderColor={"lightGrey"}
        resize={resize}
        sx={{ ...styleProps }}
        {...rest}
      />
      {error && (
        <Text
          fontSize={"15px"}
          fontWeight={"black"}
          padding={0}
          color={"red.500"}
          marginLeft={"5px"}
        >
          {errorText}
        </Text>
      )}
    </>
  );
}

export default CustomTextArea;
