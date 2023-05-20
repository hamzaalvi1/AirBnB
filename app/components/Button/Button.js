import { Button } from "@chakra-ui/react";
function UIButton(props) {
  const {
    title,
    handleClick,
    variant = "solid",
    rightIcon,
    leftIcon,
    styleProps,
    className,
    loading = false,
    type = "click",
    children,
    disabled = false,
    ...rest
  } = props;

  return (
    <Button
      type={type}
      onClick={handleClick}
      variant={variant}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      sx={styleProps}
      className={className}
      isLoading={loading}
      isDisabled = {disabled}
      {...rest}
    >
      {title}
    </Button>
  );
}

export default UIButton;