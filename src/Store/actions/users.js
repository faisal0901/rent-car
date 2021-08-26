import { POPULATE_PROFILE } from "../types";
export const populateProfile = (profile = {}) => ({
  type: POPULATE_PROFILE,
  payload: profile,
});
