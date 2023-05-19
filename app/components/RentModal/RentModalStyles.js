export const categoriesListStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  maxHeight: "400px",
  height: "100%",
  overflowY: "auto",
  paddingRight: "10px",
};

export const categoryBoxStyles = {
  width: "100%",
  padding: "10px",
  border: "2px solid",
  borderColor: "#ddd",
  cursor: "pointer",
  borderRadius: "lg",
  display: "flex",
  flexFlow: "column",
  gap: "5px",
  marginRight: "10px",
  transition: "0.25s",
  "&:hover": {
    borderColor: "#000",
  },
};
