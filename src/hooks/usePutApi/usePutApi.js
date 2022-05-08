const usePutApi = (itemId, newQuantity) => {
    let updateUser = { newQuantity };

    const url = `https://stormy-island-90522.herokuapp.com/item/${itemId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateUser)
    })
        .then(res => res.json())
        .then(result => {
            // alert('Item update successfully!!!');

        });
}