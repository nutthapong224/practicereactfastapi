# React FastAPI Project

This project is a web application built using React for the frontend and FastAPI for the backend, with MongoDB as the database.

## Project Structure

```
reactfastapi/
├── backend/                # FastAPI backend
│   ├── main.py             # Main application file
│   └── ...                 # Other backend files
├── frontend/               # React frontend
│   ├── src/                # Source files for React
│   ├── public/             # Public assets
│   ├── nginx.conf          # Nginx configuration file
│   └── vite.config.js      # Vite configuration file
├── docker-compose.yml      # Docker Compose configuration
└── ...                     # Other project files
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd reactfastapi
   ```

2. Build and run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: [http://localhost](http://localhost)
   - Backend API: [http://localhost:8000/api/items](http://localhost:8000/api/items)

### API Endpoints

- `GET /api/items` - Retrieve a list of items.

## Development

### Frontend Development

The frontend is built using React and Vite. a To run the frontend in development mode, navigate to the `frontend` directory and run:
```bash
npm install
npm run dev
```

### Backend Development

The backend is built using FastAPI. To run the backend in development mode, navigate to the `backend` directory and run:
```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

## License

This project is licensed under the MIT License.