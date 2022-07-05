const initialState = {
    display: 'home'
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'CHANGE_VIEW':
            return {
                ...state,
                display: payload
            };


        default:
            return state;
    }
}