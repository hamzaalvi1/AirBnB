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

export const stepperButtons = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
};

export const selectedStyles = {
  borderColor: "#000",
};
export const counterButton = {
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: "#718096",
};
export const imageUploadStyles = {
  position: "relative",
  padding: "50px",
  border: "2px dashed",
  borderColor: "#718096",
  cursor: "pointer",
  gap: "10px",
  borderRadius: "5px",
  margin: "10px 0 0",
  transition: "0.25s",
  "&:hover":{
    opacity: 0.75
  }

};
