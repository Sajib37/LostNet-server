# LostNet

LostNet is a backend service designed to help individuals find their lost items and return found items to rightful owners. This project provides a structured way to post, search, and claim lost-and-found items with proper authentication and moderation.

---

## ✨ Features

* Users can post a found item with image and description.
* Visitors can browse available items to check if their lost item is posted.
* Claim requests can be sent to the original poster.
* Posters can review claim requests and approve with valid proof.
* Once an item is delivered, its status is updated and removed from the available list.
* Authentication system for users and admins.
* Image upload with Cloudinary integration.

---

## 🔁 Working Process (Step-by-Step)

1. A person finds a lost item and posts it on the LostNet platform with an image and details.
2. The owner of the lost item visits the platform and searches for their item.
3. If they find a matching item, they send a claim request to the person who posted it.
4. The poster reviews the claim request. If the requester provides valid proof of ownership, the item is handed over.
5. After handing over, the poster updates the item's status to **Delivered**.
6. Once marked as Delivered, the item will no longer appear in the **Available Items** list.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sajib37/LostNet-server.git
cd lostnet
```

### 2️⃣ Initialize the project

```bash
npm init -y
```

### 3️⃣ Install dependencies

```bash
npm install express mongoose dotenv cors jsonwebtoken http-status cloudinary multer mongoose-bcrypt
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add your environment variables like:

```env
    PORT= port number
    DATABASE_URL=your_mongo_url
    NODE_ENV=development
    SUPER_ADMIN_EMAIL=your_admin_email@example.com
    SUPER_ADMIN_PASSWORD=your_admin_password
    ACCESS_TOKEN_SECRET=your_jwt_secret
    ACCESS_TOKEN_EXPIRES= Token expires time
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📦 Tech Stack

* **Express.js** – Backend framework
* **MongoDB + Mongoose** – NoSQL database and object modeling
* **Cloudinary** – Cloud-based image storage and delivery
* **Multer** – Middleware for handling multipart/form-data (image uploads)
* **JWT** – JSON Web Token for secure authentication
* **dotenv** – For environment configuration
* **cors** – For enabling cross-origin requests
* **http-status** – Standard HTTP status codes
* **mongoose-bcrypt** – Secure password hashing for user models

---

## 📂 API Endpoints Documentation

### Auth

* `POST /api/v1/users/register` → Register a new user
* `POST /api/v1/users/login` → Login with email and password

### Profile

* `GET /api/v1/users/:id` → To get single user
* `GET /api/v1/users/` → To get all users
* `PATCH /api/v1/users/:id` → To Update user
* `DELET /api/v1/users/:id` → To Delet user 

### Items

* `POST /api/v1/items/post-item` → Post a new found item (with image)
* `GET /api/v1/items` → Get all available items
* `GET /api/v1/items/:id` → Get item by ID
* `PATCH /api/v1/items/:id` → Update item information and image
* `GET /api/v1/items/delivered-items` → Get all delivered items
* `DELET /api/v1/items/:id` → Delet item by ID

### Claim Requests

* `POST /api/v1/item-request` → Send a claim request for an item
* `GET /api/v1/item-request/requested-by/:userId` → Get all claim requests made by a user
* `GET /api/v1/item-request/posted-by/:posterId` → Get all claim requests for items posted by a specific user

---

## ✅ Usage

Start the server:

```bash
npm start
```


Test your API using Postman or integrate it with a frontend (e.g., React or React Native).

---

## 📬 Contact

For any queries or contributions, feel free to reach out or create an issue on the repository.
