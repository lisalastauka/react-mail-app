const initialState = [
    'Sent First Mail',
    'Sent Second Mail'
];

export default function sentMails(state = initialState, action) {
    if(action.type === 'ADD_MAIL'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}