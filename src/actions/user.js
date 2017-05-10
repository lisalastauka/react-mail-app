export const getUser = () => dispatch => {
    setTimeout(()=> {
        dispatch( {
            type: 'GET_USER', payload: {
                username: 'User Name',
                img: 'images/profilePhoto.png'
            }
        })
    }, 2000)
};