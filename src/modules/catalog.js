import getData from "./getData"
import renderGoods from "./renderGoods"
import { categoryfilter } from "./filters"

const catalog = () => {
    const BtnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog li')

    let isOpen = false

    BtnCatalog.addEventListener('click', () => {
        isOpen = !isOpen

        if (isOpen) {
            catalogModal.style.display = 'block'
        } else {
            catalogModal.style.display = ''
        }

    })
    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent

            getData().then((data) => {
                renderGoods(categoryfilter(data, text))
            })
        })
    })
}

export default catalog