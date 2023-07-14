export const navbarStyles = (gridValue) => ({
  display: "grid",
  gridTemplateColumns: gridValue,
  alignItems: "center",
  borderBottom: "1px solid #dddddd",
  paddingBlock: "15px",
  paddingInline: "30px",

  "@media (max-width:1199px)": {
    gridTemplateColumns: " 0.5fr 1.5fr 0.5fr",
  },

  "@media (max-width:575px)": {
    gridTemplateColumns: "1fr 1fr",
  },
});
