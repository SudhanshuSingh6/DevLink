# DevLink

> A full-stack social network for developers, built on the **MERN** stack.

DevLink lets developers create a profile, showcase their experience, education, and skills, link their socials, surface their top GitHub repositories, and engage with the community through posts, likes, and comments.

---

## ✨ Features

- 🔐 **Authentication** — Register and log in with JSON Web Tokens (JWT); passwords hashed with bcrypt
- 👤 **Developer Profiles** — Add bio, status, skills, company, website, and social links
- 🎓 **Experience & Education** — Add and remove timeline entries on your profile
- 🐙 **GitHub Integration** — Display your top 5 public repositories via the GitHub API
- 📝 **Community Feed** — Create posts, like/unlike, and add or delete comments
- 🖼️ **Gravatar** — Auto-generated avatars based on email
- 📱 **Responsive SPA** — React single-page app with Redux state management and protected routes

---

## 🛠️ Tech Stack

| Layer        | Technologies                                                        |
| ------------ | ------------------------------------------------------------------- |
| **Frontend** | React 18 (Hooks), Redux + Redux Thunk, React Router v6, Axios       |
| **Backend**  | Node.js, Express, JWT, bcryptjs, express-validator                  |
| **Database** | MongoDB with Mongoose                                                |
| **Tooling**  | Concurrently, Nodemon                                                |

---

## 📁 Project Structure

```
DevLink/
├── config/             # DB connection + config keys (config package)
├── middleware/         # auth (JWT) & checkObjectID
├── models/             # Mongoose schemas: User, Profile, Post
├── routes/api/         # REST endpoints: users, auth, profile, posts
├── client/             # React frontend
│   └── src/
│       ├── actions/    # Redux action creators
│       ├── reducers/   # Redux reducers (auth, profile, post, alert)
│       ├── components/ # UI components grouped by domain
│       └── utils/      # Axios instance, helpers
├── server.js           # Express entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) — a local instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A [GitHub personal access token](https://github.com/settings/tokens) (for the repository integration)

### 1. Clone the repository

```bash
git clone https://github.com/SudhanshuSingh6/DevLink.git
cd DevLink
```

### 2. Install dependencies

Install both server-side and client-side packages:

```bash
npm install
cd client
npm install
cd ..
```

### 3. Configure environment

This project uses the [`config`](https://www.npmjs.com/package/config) package. Create **`config/default.json`** and fill in your values:

```json
{
  "mongoURI": "your_mongodb_connection_string",
  "jwtSecret": "your_jwt_secret",
  "githubToken": "your_github_personal_access_token"
}
```

> ⚠️ Keep `config/default.json` out of version control if it contains real secrets. For production, override values with `config/production.json` or environment variables.

### 4. Run the app

Start the Express server and React client together:

```bash
npm run dev
```

- API server → http://localhost:5000
- React client → http://localhost:3000 (proxied to the API)

### Other scripts

| Command          | Description                                       |
| ---------------- | ------------------------------------------------- |
| `npm run server` | Run the backend only (with Nodemon)               |
| `npm run client` | Run the React frontend only                       |
| `npm run dev`    | Run backend + frontend concurrently               |
| `npm start`      | Run the backend in production mode                |

---

## 📡 API Reference

Base URL: `/api`

### Auth — `/api/auth`
| Method | Endpoint        | Access  | Description                     |
| ------ | --------------- | ------- | ------------------------------- |
| GET    | `/`             | Private | Get the authenticated user      |
| POST   | `/`             | Public  | Log in & receive a JWT          |

### Users — `/api/users`
| Method | Endpoint        | Access  | Description                     |
| ------ | --------------- | ------- | ------------------------------- |
| POST   | `/`             | Public  | Register a new user             |

### Profile — `/api/profile`
| Method | Endpoint                  | Access  | Description                       |
| ------ | ------------------------- | ------- | --------------------------------- |
| GET    | `/me`                     | Private | Get the current user's profile    |
| POST   | `/`                       | Private | Create or update a profile        |
| GET    | `/`                       | Public  | Get all profiles                  |
| GET    | `/user/:user_id`          | Public  | Get profile by user ID            |
| DELETE | `/`                       | Private | Delete user, profile & posts      |
| PUT    | `/experience`             | Private | Add experience                    |
| DELETE | `/experience/:exp_id`     | Private | Delete experience                 |
| PUT    | `/education`              | Private | Add education                     |
| DELETE | `/education/:edu_id`      | Private | Delete education                  |
| GET    | `/github/:username`       | Public  | Get user's top GitHub repos       |

### Posts — `/api/posts`
| Method | Endpoint                        | Access  | Description              |
| ------ | ------------------------------- | ------- | ------------------------ |
| POST   | `/`                             | Private | Create a post            |
| GET    | `/`                             | Private | Get all posts            |
| GET    | `/:id`                          | Private | Get a post by ID         |
| DELETE | `/:id`                          | Private | Delete a post            |
| PUT    | `/like/:id`                     | Private | Like a post              |
| PUT    | `/unlike/:id`                   | Private | Unlike a post            |
| POST   | `/comment/:id`                  | Private | Comment on a post        |
| DELETE | `/comment/:id/:comment_id`      | Private | Delete a comment         |

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, and open a pull request.

---

## 📄 License

This project is licensed under the **ISC License**.
