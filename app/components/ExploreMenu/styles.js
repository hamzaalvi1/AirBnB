export const exploreMenuStyles = {
  border: "1px solid",
  borderColor: "borderColor",
  gridTemplateColumns: "40% 25% 25% 10%",
  borderRadius: "20px",
};

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    border: "none",
    padding: "5px",
    borderColor: state.isFocused ? "transparent" : "transparent",
    backgroundColor: "transparent",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "12px",
  }),
};

export const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: "transparent",
    primary25: "#ffe4e6",
  },
});
