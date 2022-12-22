import {Router, Model, Types} from 'chomex';

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     console.log(msg);
//     console.log(sender);
//     sendResponse("From the background Script");
// })

 
// Define your model
class User extends Model {
  static schema = {
    name: Types.string.isRequired,
    age:  Types.number,
  }
}
 
const router = new Router();
 
// Define your routes
router.on("/users/create", message => {
  console.log('====================================');
  console.log('user create,',message);
  console.log('====================================');
  const obj = message.user;
  const user = User.new(obj).save();
  return user;
});
 
router.on("/users/get", message => {
  const userId = message.id;
  const user = User.find(userId);
  if (!user) {
    return {status:404,error:"not found"};
  }
  // You can also return async Promise
  return Promise.resolve(user);
});
 
// Don't forget to add listener to chrome modules.
chrome.runtime.onMessage.addListener(router.listener());