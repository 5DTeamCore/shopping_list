# Shopping List

## API
All routes except login and register have authentication
*provide the header x-access-token with the token key*
### User
GET  
_To get friend list_
```
Endpoint:
  - /api/user/friend?user_id=1
```
_To get friend request list_
```
Endpoint:
  - /api/user/friendRequests?user_id=1
```
POST  
_To Login a User_
```
Endpoint:
  - /api/user/login
Parameter:
  {
    username: "asdf",
    password: "asdf",
  }
Response:
  {
    success: boolean
    token: '1234123412341234'
  }
```
_To Register a User_
```
Endpoint:
  - /api/user/register
Parameter:
  {
    username: "asdf",
    password: "asdf",
  }
Response:
  Response:
  {
    success: boolean,
    token: 'asdfasdfasdfadsf'
  }
```
_To Add a Friend_
```
Endpoint:
  - /api/user/addFriend
Parameter:
  {
    user_id: 1,
    friend_id: 2,
  }
Response:
  Response:
  {
    success: boolean
  }
```
_To action a friend request_
```
Endpoint:
  - /api/user/actionFriendRequest
Parameter:
  {
    action: [
      APPROVE | PENDING_APPROVAL | REJECT | INACTIVE | CLOSED
    ],
    friend_request_id: 1,
  }
Response:
  Response:
  {
    success: boolean
  }
```
### Group
GET  
_To get all the groups this user has_
```
- /api/user/login?user_id=123
```
POST  
_To create a group_
```
Endpoint:
  - /api/group/create
Parameter:
  {
    name: "asdf",
    user_id: 1,
  }
Response:
  Response:
  {
    success: boolean
  }
```
_To add a user to the group_
```
Endpoint:
  - /api/group/addUser
Parameter:
  {
    user_id: 1,
    group_id: 1,
  }
Response:
  Response:
  {
    success: boolean
  }
```
_To action a request fro the group_
```
Endpoint:
  - /api/group/action
Parameter:
  {
    action: [
      APPROVE | PENDING_APPROVAL | REJECT | INACTIVE | CLOSED
    ],
    user_group_id: 1,
  }
Response:
  Response:
  {
    success: boolean
  }
```
### ITEM
GET  
_To get all the items in this group_
```
- /api/items?group_id=1
```
POST  
_To create a item_
```
Endpoint:
  - /api/item/add
Parameter:
  {
    name: "asdf",
    amount: 10,
    quantity: 1,
    active: 1, // 1 = Active, 0 = Inactive
    shopping_group_id: 1,
    category_id: 1,
    user_id: 1
  }
Response:
  Response:
  {
    success: boolean
  }
```
