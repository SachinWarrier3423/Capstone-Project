# Cloud-Based Threat Intelligence Dashboard

A **MERN** (MongoDB, Express.js, React.js, Node.js) application that aggregates real‑time threat intelligence data from external sources, processes it, and displays interactive visualizations and alerts. This prototype is fully functional and awaits deployment.

---

## 📂 Project Structure

```
Backend/
├── config/            # Database connection
│   └── db.js
├── controllers/       # Request handlers
│   ├── alertController.js
│   ├── authController.js
│   └── threatController.js
├── middlewares/       # Authorization & error handling
│   ├── auth.js
│   └── errorHandler.js
├── models/            # Mongoose schemas
│   ├── Alert.js
│   ├── Threat.js
│   └── User.js
├── routes/            # API endpoints
│   ├── alertRoutes.js
│   ├── authRoutes.js
│   └── threatRoutes.js
├── tests/             # Jest & Supertest tests
│   └── threat.test.js
├── .env.example       # Sample environment variables
├── jest.config.js     # Testing config
└── server.js          # Entry point (with Socket.io integration)

ui/threat-intel/
├── public/            # Static assets & HTML
├── src/
│   ├── api/           # Axios wrappers (authApi.js, threatApi.js, alertApi.js)
│   ├── components/    # React UI components
│   ├── context/       # AuthContext.js
│   ├── hooks/         # useSocket.js
│   ├── App.js         # Routes & layout
│   ├── index.js
│   └── styles.css
├── .env.example       # Frontend environment variables
└── package.json       # Scripts & dependencies

```

---

## 🛠️ Prerequisites

- **Node.js** ≥ v16 (tested on v22.13.0) & **npm** ≥ v7 (tested on 10.9.2)
- **MongoDB Atlas** account (free-tier cluster v8.0.x)
- **Git** (optional)
- **Postman** or **curl** for API testing

---

## ⚙️ Backend Setup

1. **Copy & configure** environment:
   ```bash
   cd Backend
   cp .env.example .env
   ```
   Fill in:
   ```dotenv
   MONGO_URI=<your Atlas connection string>
   JWT_SECRET=<random secret>
   PORT=5000
   ```

2. **Install dependencies**:
   ```bash
   npm install express mongoose dotenv bcryptjs jsonwebtoken socket.io cors
   npm install --save-dev jest supertest nodemon
   ```

3. **Add scripts** to `package.json`:
   ```json
   "scripts": {
     "dev": "nodemon server.js",
     "test": "jest"
   }
   ```

4. **Run the server**:
   ```bash
   npm run dev
   ```
   You should see:
   > MongoDB connected
   > Server listening on port 5000

5. **Run tests**:
   ```bash
   npm test
   ```

---

## ⚛️ Frontend Setup

1. **Copy & configure** environment:
   ```bash
   cd ui/threat-intel
   cp .env.example .env
   ```
   Fill in:
   ```dotenv
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

2. **Install dependencies**:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled react-router-dom axios socket.io-client chart.js react-chartjs-2 jspdf json2csv
   ```

3. **Start the React app**:
   ```bash
   npm start
   ```
   Open http://localhost:3000 in your browser.

---

## 📡 Features & Testing

- **User Authentication**: Signup & login with JWT and role-based access.
- **Threat CRUD**: Create, read, update, delete via `/api/threats`.
- **Real-Time Updates**: Socket.io streams `NEW_THREAT` and `NEW_ALERT` events to the dashboard.
- **Alerts**: Auto-generate when a `high` severity threat is created.
- **Visualization**: Line charts for threat trends, alerts table, and export CSV/PDF.
- **Automated Tests**: Threat CRUD coverage; extendable to auth & alerts.

### Manual API Tests (via Postman/curl)
1. **Signup**: `POST /api/auth/signup`
2. **Login**: `POST /api/auth/login` → retrieve `token`
3. **Create Threat**: `POST /api/threats` with `Authorization: Bearer <token>`
4. **Get Threats**: `GET /api/threats` with auth header
5. **Get Alerts**: `GET /api/alerts` with auth header

---

## 🚀 Next Steps (Pre‑Deployment)

1. **Expand automated tests** for auth & alerts.
2. **Implement search/filter** in the dashboard UI.
3. **Lint & Prettier**: enforce code style.
4. **Documentation**: add Swagger/OpenAPI for backend.
5. **Deployment**: hook up to Heroku, Vercel, or Cloud Run + Netlify.

---

Made with ❤️ by your MERN dev team. Feel free to open issues or pull requests!

