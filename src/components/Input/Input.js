"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

function CustomInput(props) {
  const {
    value,
    label = false,
    labelText,
    labelStyles,
    styleProps,
    inputStyles,
    type,
    placeholder,
    onChange,
    onBlur,
    errorText,
    errorTextStyle,
    error = false,
    helperText,
    isHelper = false,
    isDisabled = false,
    isReadOnly = false,
    variant,
    InputRightElements,
    InputLeftElements,
    isCustomInput = false,
    name,
    ...rest
  } = props;
  return isCustomInput ? (
    <InputGroup sx={styleProps}>
      {InputLeftElements && (
        <InputLeftElement>
          <InputLeftElements />
        </InputLeftElement>
      )}
      <Input
        type={type}
        onChange={onChange}
        value={value}
        variant={variant}
        placeholder={placeholder}
        name={name}
        sx={inputStyles}
        {...rest}
      />
      {InputRightElements && (
        <InputRightElement>
          <InputRightElements />
        </InputRightElement>
      )}
    </InputGroup>
  ) : (
    <FormControl
      sx={styleProps}
      isInvalid={error}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      {label && <FormLabel sx={labelStyles}>{labelText}</FormLabel>}
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        sx={inputStyles}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {isHelper && <FormHelperText>{helperText}</FormHelperText>}
      {error && (
        <FormErrorMessage sx={errorTextStyle}>{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default CustomInput;
