import { combineReducers } from 'redux';

import inbox from './inbox'
import sentMails from './sentMails'
import user from './user'
export default combineReducers({
    user,
    inbox,
    sentMails
})