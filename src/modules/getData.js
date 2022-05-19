const getData = (str) => {
    return fetch(`https://test-2462a-default-rtdb.firebaseio.com/goods.json`)
        .then((response) => {
            return response.json()
        })

}

export default getData