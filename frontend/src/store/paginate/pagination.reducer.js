let initialState = {
    pageNo:1
};
export const pageReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "getPage": {
			return {
				pageNo: payload,
			};
		}
		default: {
			return state;
		}
	}
};
