# Example Queries

## Create Admin User
```graphql
mutation CreateAdmin {
  createAdmin(createAdminData: {
    firstName: "Admin1",
    lastName: "Apellido1",
    email: "admin1@example.com",
    password: "123456",
    phoneNumber: "3000000000"
  }) {
    token
    admin {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
}
```

> **Note:** The token in the response is required to perform the following queries.

```graphql
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBleGFtcGxlLmNvbSIsInN1YiI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzEwNTk4NzQzfQ.E0jumVvCT03AvGs123vEGsBGRgCABpV3Cg7Gl61olX8"
}
```

## Get user trips
```graphql
query {
  users {
    count
    users {
    id
    firstName
    lastName
    email
    phoneNumber
    registrationDate
    averageRating
    location
    createdAt
    updatedAt
    trips {
      id
      origin
      destination
      startDateTime
      endDateTime
      distance
      fare
      duration
      createdAt
      updatedAt
    }
  }
 }
}
```