const getData = () => {
   return fetch('https://js-ozon-default-rtdb.firebaseio.com/goods.json')
      .then((response) => {
         return response.json()
      })

}

export default getData