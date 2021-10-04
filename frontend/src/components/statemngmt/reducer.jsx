export default function reducer(
  state = { data: { labresult: 0, paitient: 0, login: false, waiting: 0 } },
  action
) {
  switch (action.type) {
    case "labresult":
      state["data"]["labresult"] += action.payload.number;
      return { ...state };
    case "waiting":
      state["data"]["waiting"] += action.payload.number;
      return { ...state };
    case "paitient":
      state["data"]["paitient"] += action.payload.number;
      return { ...state };
    case "login":
      state["data"]["login"] = action.payload.login;
      return { ...state };
    default:
      return state;
  }
}
