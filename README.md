# Employees API
Needs Docker installed to run

Clone repository in target path
-----

    git clone https://github.com/mitekk/clar-gil.palikaras.git

Rename .env.example to .env
-----

    .env

Run Docker containers
-----
In the project root directory run this to create containers and run them in background:
-----
    docker-compose up -d --build 

Requests
-----
The main URL for requests is this:
-----
    http://localhost:8081/api/v1/


Get all employees or by ID (GET):

    http://localhost:8081/api/v1/employees/:employeeID

Create an employee (POST):

    http://localhost:8081/api/v1/employee


In request body, add data:

{
    "name": "Bill",
    "email": "bill@mail.com",
    "dob": "1985-01-24",
    "department": "sales",
    "supervisor": 1,
    "userId": 1,
    "status": "pending"
}

Update an employee (PUT):

    http://localhost:8081/api/v1/employee


In request body, add data:

{
    "employeeId": 2,
    "name": "Bill",
    "email": "bill@mail.com",
    "dob": "1985-01-24",
    "department": "sales",
    "supervisor": 1,
    "userId": 1,
    "status": "pending"
}

Delete an employees or by ID (DELETE):

    http://localhost:8081/api/v1/employee/:employeeID
