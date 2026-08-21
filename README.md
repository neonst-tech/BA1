# BA1 – Property Rental Management Portal

MERN stack starter skeleton for the **Property Rental Management Portal**.

## Purpose

This repository is a starting framework for the project. It gives you a basic technical structure and a project-specific map of the major application areas without implementing the client's requirements for you.

Use the **Project Requirement Document** as the source of truth. Decide the database design, API design, component structure, routing, authentication, validation, business logic, and final UI yourself.

## Stack

- MongoDB
- Express.js
- React.js
- Node.js

## Project structure

```text
BA1/
├── client/
│   └── src/
│       ├── components/
│       │   ├── layout/
│       │   └── property/
│       ├── pages/
│       │   ├── Login/
│       │   ├── Register/
│       │   ├── Home/
│       │   ├── PropertyManagement/
│       │   ├── PropertyDetails/
│       │   ├── RentalEnquiry/
│       │   ├── EnquiryManagement/
│       │   ├── MyEnquiries/
│       │   └── Profile/
│       └── styles/
│
├── server/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       └── routes/
│
├── .gitignore
└── README.md
```

The page folders are intentionally named after the major areas described in the requirements. They are only a starting map; you may reorganize them as your implementation requires.

The backend folders are intentionally kept generic. You are expected to decide which models, controllers, routes, middleware, and other backend files are appropriate for the application.

## About `.gitkeep`

Some folders contain a `.gitkeep` file only because Git does not track empty directories.

As you begin implementing the project, **remove the `.gitkeep` file from a folder once you add your actual files there.**

## Getting started

1. Clone the repository.
2. Install dependencies from the frontend and backend `package.json` files.
3. Create your environment variables using the provided examples.
4. Read the Project Requirement Document carefully.
5. Plan the application before implementing it.
6. Build the project page by page and feature by feature.

## Important

This is **not a prescribed architecture**. The starter structure is provided to help you understand the larger shape of the project and avoid starting from a completely blank repository.

You are expected to add, remove, rename, or reorganize files and folders when your implementation requires it.

No client business logic, database schema, completed CRUD operations, authentication implementation, API implementation, or finished UI is provided intentionally.
