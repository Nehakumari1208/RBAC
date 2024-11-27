# **RBAC (Role-Based Access Control) Admin Dashboard**

## **Overview**
The **RBAC Admin Dashboard** is a web application that provides administrators with a secure, user-friendly interface to manage users, roles, and permissions within an organization. It implements **Role-Based Access Control (RBAC)**, allowing for dynamic assignment of roles and permissions to users. Built using **React** for the frontend, **TailwindCSS** for styling, and utilizing mock API calls, this project simulates the backend interaction for creating, updating, and managing users and roles.

This system allows administrators to:
- View and manage users.
- Assign roles and permissions.
- Add, edit, or delete users and roles.
- Display permissions clearly to ensure users have the right access.

---

## **Table of Contents**
1. [Project Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [API Endpoints](#api-endpoints)
6. [Project Structure](#project-structure)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## **Features**

### **User Management**
- **Add Users**: Admin can create new users by providing details like name, email, phone, and role.
- **Edit Users**: Update user information, including name, email, phone, and roles.
- **Delete Users**: Admins can delete users from the system.
- **Assign Roles**: Admin can assign roles (e.g., Admin, User, Manager) to each user.
- **Manage User Status**: Toggle user status between Active and Inactive.

### **Role Management**
- **Create Roles**: Define new roles and assign permissions to them (e.g., Admin, Manager, User).
- **Edit Roles**: Modify the role details or permissions associated with the role.
- **View Roles**: Display all roles with their permissions.

### **Permissions**
- **Dynamic Permissions**: Allow for the dynamic addition or modification of permissions for each role (e.g., Read, Write, Delete).
- **Permission Visualization**: Clearly display which permissions each role or user has been assigned.

### **Responsive Design**
- **Mobile-First Approach**: The design is optimized to adapt to different screen sizes, providing a seamless experience across desktops, tablets, and mobile devices.

### **API Simulation**
- **Mock API Calls**: The project simulates server interactions using mock APIs to handle CRUD operations for users and roles.

---

## **Technologies Used**
- **Frontend**: React.js, TailwindCSS
- **API Simulation**: JSON Server (or similar mock backend)
- **State Management**: React useState, useEffect Hooks
- **Form Handling**: React Controlled Components
- **Routing**: React Router (for navigation between different views/pages)

---

## **Installation**

### Prerequisites
To set up this project, make sure you have the following installed:
- **Node.js** (v14 or above)
- **npm** (Node package manager)
- A text editor such as **VS Code**


