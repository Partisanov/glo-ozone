export const searchfilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })

}

export const categoryfilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })

}

export const pricefilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        return ((goodsItem.price >= min) && (goodsItem.price <= max))
    })
}

