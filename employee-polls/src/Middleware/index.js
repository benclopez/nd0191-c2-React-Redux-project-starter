import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

// Example from react chirper
export default applyMiddleware(thunk, logger);
