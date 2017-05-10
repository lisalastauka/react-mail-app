const initialState = {
    username : 'Unknown'
};

export default function sentMails(state = initialState, action) {
    if(action.type === 'GET_USER'){
        return  action.payload;
    }
    return state;
}