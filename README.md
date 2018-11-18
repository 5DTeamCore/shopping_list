# Shopping List

## API

### User
GET
_To get friend list_
```
Endpoint:
  - /user/friend?user_id=1
```
_To get friend request list_
```
Endpoint:
  - /user/friendRequests?user_id=1
```
POST
_To Login a User_
```
Endpoint:
  - /user/login
Parameter:
  {
    username: "asdf",
    password: "asdf",
  }
Response:
  {
    success: boolean
  }
```
_To Register a User_
```
Endpoint:
  - /user/register
Parameter:
  {
    username: "asdf",
    password: "asdf",
  }
Response:
  Response:
  {
    success: boolean
  }
```
_To Add a Friend_
```
Endpoint:
  - /user/addFriend
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
  - /user/actionFriendRequest
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
- /user/login?user_id=123
```
POST
_To create a group_
```
Endpoint:
  - /group/create
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
  - /group/addUser
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
  - /group/action
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
