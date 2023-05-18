export const categoriesStyles = {
  padding: "20px 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const categoriesItemStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  color: "#4A5568",
  gap: "5px",
  cursor: "pointer",
  marginInline: "10px",
  paddingBottom: "5px",
  transition: "0.25s",
  borderBottom: "2px solid transparent",
  "&:hover": {
    color: "#aeb0b2",
    borderBottom: "2px solid #aeb0b2;",

  }
};
export const selectedStyles ={
  color:"#aeb0b2",
  borderBottom: "2px solid #aeb0b2"
}