import axios from "axios"

export default function ajax(url = "", params = {}, type = "get") { //url=""函数默认值
    //1、定义一个promise对象
    let promise;
    return new Promise((resolve, reject) => {
        // 2、判断请求方式
        if ("get" == type) {
            let paramsStr = ""
            Object.keys(params).forEach(key => {
                paramsStr += key + "=" + params[key] + "&"
            })
            if (paramsStr !== "") {
                paramsStr.substr(0, paramsStr.lastIndexOf("&"));
                url += "?" + paramsStr
            }
            //拼接URL完整路径

            promise = axios.get(url)
        } else if ("post" == type) { //post请求方式  参数为URL，发送的对象
            promise = axios.get(url, params)
        }

        //返回请求结果
        promise.then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err);
        })
    })
}