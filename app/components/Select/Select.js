"use client";
import Select from "react-select";

function CustomSelect(props) {
  const {
    options,
    isMulti = false,
    searchable = false,
    disabled = false,
    loading = false,
    clearable = false,
    handleChange,
    name,
    changebleStyles = "",
    formatOptionLabel,
    placeholder,
    defaultValue,
    id,
    value,
    className,
    changebleTheme = "",
    ...rest
  } = props;

  const styles = {
    control: (base, state) => ({
      ...base,
      border: "2px solid #000",
      padding: "5px",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#000",
      },
    }),
    input: (base, state) => ({
      ...base,
      fontSize: "16px",
      cursor: "pointer",
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "16px",
      cursor: "pointer",
    }),
  };

  const theme = (theme) => ({
    ...theme,
    borderRadius: 5,
    colors: {
      ...theme.colors,
      primary: "#000",
      primary25: "#ffe4e6",
    },
  });

  return (
    <Select
      id={id}
      name={name}
      isMulti={isMulti}
      isDisabled={disabled}
      isLoading={loading}
      isClearable={clearable}
      options={options}
      onChange={handleChange}
      searchable={searchable}
      placeholder={placeholder}
      defaultValue={defaultValue}
      formatOptionLabel={formatOptionLabel}
      styles={changebleStyles ? changebleStyles : styles}
      className={className}
      theme={changebleTheme ? changebleTheme : theme}
      value={value}
    />
  );
}

export default CustomSelect;
