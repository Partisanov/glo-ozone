import getData from "./getData"
import renderGoods from "./renderGoods"
import { pricefilter } from "./filters"

const price = () => {

    const minPriceInput = document.getElementById('min')
    const maxPriceInput = document.getElementById('max')
    let minPrice = 0
    let maxPrice = 999999999999999
    minPriceInput.addEventListener('input', (event) => {
        minPrice = event.target.value
        getData().then((data) => {
            renderGoods(pricefilter(data, minPrice, maxPrice))
        })
    })
    maxPriceInput.addEventListener('input', (event) => {
        maxPrice = event.target.value
        getData().then((data) => {
            renderGoods(pricefilter(data, minPrice, maxPrice))
        })
    })
}

export default price