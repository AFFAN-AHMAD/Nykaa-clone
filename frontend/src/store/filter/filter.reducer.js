


let initialState = {
    getProducts: {
        loading: true,
        success: false,
        error:false
    },
    productsData: [],
  filterData:[]
};
export const filterReducer = (state = initialState, { type, payload }) => {


    switch (type) {
        case "getData": {
            return {
                ...state,
                productsData:payload
            }
        }
            default: {
             return state;
        }
    }
}