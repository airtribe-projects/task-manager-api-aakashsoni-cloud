# Task Manager API
A RESTful API for managing tasks, built with Node.js, Express, and JavaScript.

# Table of Contents
1. Overview
2. Features
3. Endpoints
4. Installation
5. Testing
6. API Documentation

# Overview
This project provides a simple task management API that allows users to create, read, update, and delete tasks. 
The API is built using Node.js, Express, and JavaScript, and uses a JSON file as a mock database.

# Features
- Create new tasks with title, description, priority, and completed status
- Retrieve all tasks or a single task by ID
- Update existing tasks with new title, description, priority, or completed status
- Delete tasks by ID
- Filter tasks by completed status, priority, or title
- Sort tasks by title in ascending or descending order

# Endpoints

### GET /tasks
- Retrieve all tasks
- Query parameters:
    - **completed**: Filter tasks by completed status (true or false)
    - **priority**: Filter tasks by priority
    - **sort**: Sort tasks by title in ascending (asc) or descending (desc) order
    
### GET /tasks/:id
- Retrieve a single task by ID


### POST /tasks
- Create a new task
- Request body:
    - **title**: Task title
    - **description**: Task description
    - **priority**: Task priority
    - **completed**: Task completed status (true or false)
    
### PUT /tasks/:id
- Update an existing task
- Request body:
    - **title**: Task title
    - **description**: Task description
    - **priority**: Task priority
    - **completed**: Task completed status (true or false)

### DELETE /tasks/:id
- Delete a task by ID


# Installation
1. Clone the repository: git clone [https://github.com/your-username/task-manager-api.git](https://github.com/your-username/task-manager-api.git`)
2. Install dependencies: npm install
3. Start the server: npm start

# Testing
- Run tests: npm test