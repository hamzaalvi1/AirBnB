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
import {
  formControlStyles,
  defaultLabelStyles,
  defaultInputStyles,
} from "./styles";

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
    <InputGroup sx={{ ...formControlStyles, ...styleProps }}>
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
        sx={{ ...defaultInputStyles, ...inputStyles }}
        {...rest}
        border={"1px solid"}
        borderColor={"lightGrey"}
      />
      {InputRightElements && (
        <InputRightElement>
          <InputRightElements />
        </InputRightElement>
      )}
    </InputGroup>
  ) : (
    <FormControl
      sx={{ ...formControlStyles, ...styleProps }}
      isInvalid={error}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      {label && (
        <FormLabel
          sx={{ ...defaultLabelStyles, defaultInputStyles, ...labelStyles }}
        >
          {labelText}
        </FormLabel>
      )}
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        sx={{ ...defaultInputStyles, ...inputStyles }}
        onChange={onChange}
        onBlur={onBlur}
        border={"1px solid"}
        borderColor={"lightGrey"}
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
