import * as types from "@/redux/mutation-types"

const initState = {
  isCollapse: true,
  menuList: []
}

const menu = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_COLLAPSE:
      return {
        ...state,
        isCollapse: action.isCollapse
      }
    case types.SET_MENU_LIST:
      return {
        ...state,
        menuList: action.menuList
      }
    default:
      return state
  }
}

export default menu