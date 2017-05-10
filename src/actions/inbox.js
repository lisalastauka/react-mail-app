export const getInbox = () => dispatch => {
    setTimeout(()=> {
        dispatch( {
            type: 'ADD_MAIL', payload: {header: 'Item title 5',
                text: `Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam
                            ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
                            imperdiet nisi. Proin condimentum fermentum nunc. `,
                author: {name:'Some Strange Person',
                profile_picture: 'images/member3.png'},
            }
        })
    }, 2000)
};