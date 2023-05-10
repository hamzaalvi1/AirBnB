import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  // button: {
  //   // this will style the MenuButton component
  //   fontWeight: 'medium',
  //   bg: 'teal.500',
  //   color: 'gray.200',
  //   _hover: {
  //     bg: 'teal.600',
  //     color: 'white',
  //   },
  // },
  list: {
    // this will style the MenuList component
    py: '2',
    borderRadius: 'md',
    border: 'none',
    bg: 'white',
    boxShadow: "0 0px 05px 0px rgba(0, 0, 0, 0.2);",
   
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: '#000',
    fontSize: "sm",
    fontWeight:"semibold",
    px:"1rem",
    marginBottom: "5px",
    py:"0.5rem",
    _hover: {
      bg: 'gray.100',
    },
    divider: {
      // this will style the MenuDivider component
      my: '1',
      borderColor: 'pink',
      borderBottom: '2px solid',
    },
  },
})
// export the base styles in the component theme
export default defineMultiStyleConfig({ baseStyle })