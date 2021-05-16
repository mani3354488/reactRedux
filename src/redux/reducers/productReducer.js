import { actionTypes } from "../constants/actionTypes"

const initialState = {
    products:[{
        id: 1,
        title: "Mani",
        catagory: "programmer"
    }]
}

export const productReducer = (state = initialState, action) => {
    switch(actionTypes){
        case actionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}