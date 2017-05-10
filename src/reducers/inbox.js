const initialState = [
    {header: 'Item title 1',
    text: `Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam
                            ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
                            imperdiet nisi. Proin condimentum fermentum nunc. `,
        author: {name:'Some Strange Person',
            profile_picture: 'images/member1.png'}},
    {header: 'Item title 2',
    text: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                            augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.`,
        author: {name:'Taylor Swift',
            profile_picture: 'images/member2.png'}},
    {header: 'Item title 3',
    text: `Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam
                            ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
                            imperdiet nisi. Proin condimentum fermentum nunc. `,
        author: {name:'Beautiful Girl',
            profile_picture: 'images/member3.png'}},
    {header: 'Item title 4',
    text: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                            augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.`,
        author: {name:'50 Shades',
            profile_picture: 'images/member4.png'}},
];

export default function inbox(state = initialState, action) {
    if(action.type === 'ADD_MAIL'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}