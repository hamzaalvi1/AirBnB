export const categoriesStyles = {
  padding: "20px 10px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "&::-webkit-scrollbar": {
    width: "5px",
    backgroundColor: "#f5f5f5",
  },

  "&::-webkit-scrollbar-button:end:increment": {
    display: "none",
  },
  "&::-webkit-scrollbar-button:start:decrement": {
    display: "none",
  },
  "&::-webkit-scrollbar-track-piece": {
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fff",
  },

  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: "10px",
    backgroundColor: "#00B5D8",
  },

  "@media (max-width: 1199px)": {
    maxWidth: "100vw",
    overflowX: "auto",
    gap: "10px",
    padding: "15px 10px 0",
  },
  "@media (max-width: 575px)": {
    gap: "0",
  },
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
  },
};
export const selectedStyles = {
  color: "#aeb0b2",
  borderBottom: "2px solid #aeb0b2",
};
