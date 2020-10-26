import ajax from "./ajax"

const Base_URL = "/api"

export const searchFn = (params) => ajax(Base_URL + "/v1/search", params)