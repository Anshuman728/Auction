# 🏷️ Auction Management System (MERN Stack)

A full-stack Auction Management platform built with the **MERN stack**, featuring role-based dashboards for **Auctioneers**, **Bidders**, and **SuperAdmins**. Real-time bidding experience with secure authentication, email notifications, and platform management capabilities.

---

## 🚀 Features

### 👤 Role-Based Access
- **SuperAdmin**: Full control over platform (users, auctions, categories).
- **Auctioneer**: Create, manage, and monitor auctions.
- **Bidder**: Browse and bid on active auctions.

### 🔧 Core Functionalities
- User registration & login with **JWT-based authentication**
- Separate dashboards for each role
- **Auction creation and management** (Auctioneer)
- **Live bidding system** (Bidder)
- **Winning email notification** using **Nodemailer + SendGrid**
- Role-based protected routes with **JWT**
- State managed using **Redux**

---

## 🛠️ Tech Stack

| Technology      | Usage                          |
|----------------|---------------------------------|
| MongoDB         | Database                        |
| Express.js      | Backend server                  |
| React.js        | Frontend                        |
| Node.js         | Server-side runtime             |
| Redux           | State management                |
| JWT             | Authentication                  |
| Nodemailer      | Email sending                   |
| SendGrid        | Email provider                  |

---

## 🖥️ Dashboards

### 🧑‍⚖️ Auctioneer
- Create auction with title, description, image, start/end time, reserve price
- View current bids on their auctions
- Declare winners

### 🧑‍💼 Bidder
- Browse live auctions
- Place bids
- View won/lost history
- Receive winning email if highest bidder

### 👨‍💻 SuperAdmin
- View all users & roles
- Manage auctions, ban users, approve/reject auctioneers
- Monitor platform statistics

---

## 📦 Folder Structure

/client --> React Frontend (Redux, Routes, Components)
/server --> Node + Express Backend (APIs, JWT, Mail)
/models --> Mongoose Schemas (User, Auction, Bids)
/controllers --> Business logic for APIs
/utils --> Email, Authentication Middleware

<img width="955" alt="image" src="https://github.com/user-attachments/assets/b4ef9c09-331b-40d8-b465-79dca15048c0" />

<img width="959" alt="image" src="https://github.com/user-attachments/assets/c9c3f46e-9f52-4e60-bdb2-506de285f567" />



