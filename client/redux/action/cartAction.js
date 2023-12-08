export const addCart= (item)=>({
     type: 'ADDCART',
     payload: item,
});

export const removeCart =(item)=>({
    type:"REMOVECART",
    payload:item,
})
export const addProduct= (items)=>({
    type: 'ADDPRODUCT',
    payload:items,
});

export const getProduct= (items)=>({
    type: 'GETPRODUCT',
    payload:items,
});

export const increaseQty =(items)=>({
    type: 'INCREASEQTY',
    payload:items,

});

export const decreaseQty =(items)=>({
    type: 'DECREASEQTY',
    payload:items,

});

export const addFav =(items)=>({
    type: 'ADDFAV',
    payload:items,
})

export const removeFav =(items)=>({
    type: 'REMOVEFAV',
    payload:items,
})

export const getCategory=(items)=>({
    type: 'GETCATEGORY',
    payload:items,
})