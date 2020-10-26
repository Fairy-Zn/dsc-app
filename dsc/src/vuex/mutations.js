import { MessageBox } from 'mint-ui';
const mutations = {
    addNum(state) {
        ++state.num
    },
    addNumX(state, data) {
        console.log(state);
        state.num += data
    },
    getCategoryDatas(state, data) {
        state.categoryDatas = data
        console.log(data);
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        console.log(data);
        state.goodsDetails = data
    },
    setCartDatas(state, data) {
        console.log(data);
        console.log(state);
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // ++
    addCart(state, index) {
        console.log(state.carts[index].value);
        state.carts[index].value++;
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // --
    redCart(state, index) {
        console.log(state.carts[index].value);
        if (state.carts[index].value == 1) {
            state.carts[index].value == 1
            MessageBox({
                title: '提示',
                message: '亲，请至少购买一个哟'
            })
        } else {
            state.carts[index].value--;
        }

        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 输入数字
    changeValue(state, data) {
        console.log(state);
        console.log(data);

        if (data.val <= 1) {
            data.val = 1
            MessageBox({
                title: '提示',
                message: '亲，请至少购买一个哟'
            })
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //商品选中状态
    changeSelect(state, isSelect) {
        console.log(state);
        console.log(isSelect);
        state.carts[isSelect.index] = isSelect.cart;

        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        console.log(isCheck);
        state.checkAll = isCheck
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 全选
    selectAllFn(state) {
        console.log(state);
        state.checkAll = !state.checkAll
        state.carts.forEach(item => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 删除
    dele(state, index) {
        MessageBox.confirm('亲，您确定要放弃该宝贝吗？').then(() => {
            console.log("确定");
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }, () => {
            console.log("取消");
        })
    },
    // 搜索
    searchKeywords(state, data) {
        state.searchList = data
        console.log(data);
        console.log(state);
    }
}

export default mutations