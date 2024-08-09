import * as types from "@/redux/mutation-types"

const globalState = {
  token: ''
}

const global = (state = globalState, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export default global