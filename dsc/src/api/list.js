import ajax from "./ajax"

const Base_URL = "/api"

export const getGoodsList = (params) => ajax(Base_URL + "/v1/category/goodslist", params)

export const getGoodsDetail = (params) => ajax(Base_URL + "/v1/category/goodsdetail", params)