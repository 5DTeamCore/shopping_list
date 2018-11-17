# Shopping List

## API

### User
POST
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

### Group
GET
```
- /user/login?user_id=123
```
POST
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
