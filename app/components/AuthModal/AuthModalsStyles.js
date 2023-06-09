export const orTextStyles = {
    fontSize: "sm",
    textStyle: "secondary",
    fontWeight: "semibold",
    textAlign: "center",
    color: "gray.600",
    position: "relative",
    ":before": {
      content: "''",
      position: "absolute",
      width: "45%",
      height: "0.5px",
      background: "gray.200",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
    ":after": {
      content: "''",
      position: "absolute",
      width: "45%",
      height: "0.5px",
      background: "gray.200",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  };