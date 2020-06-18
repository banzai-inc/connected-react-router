import createConnectedRouter from "./ConnectedRouter"
import createConnectRouter from "./reducer"
import createSelectors from "./selectors"
import moriStructure from './structure/mori'

export { LOCATION_CHANGE, CALL_HISTORY_METHOD, onLocationChanged, push, replace, go, goBack, goForward, routerActions } from "./actions"
export { default as routerMiddleware } from "./middleware"

export const ConnectedRouter = /*#__PURE__*/ createConnectedRouter(moriStructure)
export const connectRouter = /*#__PURE__*/ createConnectRouter(moriStructure)
export const { getLocation, getAction, getHash, getSearch, createMatchSelector } = /*#__PURE__*/ createSelectors(moriStructure)
