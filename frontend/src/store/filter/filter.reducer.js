


let initialState = {
    getProducts: {
        loading: true,
        success: false,
        error:false
    },
  productsData: [],
};
export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
            default: {
             return state;
        }
    }
}