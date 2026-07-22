# WebMapApp

A web mapping playground with a Vite frontend showcasing three JS map
libraries (Leaflet, MapLibre GL JS, CesiumJS) and a FastAPI backend that
serves the built frontend as static files.

## Project structure

```
frontend/   Vite (vanilla JS) app with demo pages for each map library
backend/    FastAPI app that serves frontend/ build output from backend/static
```

## Frontend

```bash
cd frontend
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # build and output straight into backend/static
```

Demo pages:

- `/` — landing page with links to each demo
- `/leaflet.html` — Leaflet map with a province dropdown to fly to any of
  Thailand's 77 provinces
- `/maplibre.html` — MapLibre GL JS map
- `/cesium.html` — CesiumJS 3D globe (uses OpenStreetMap imagery, no Ion
  token required)

## Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Serves the contents of `backend/static` (the frontend build output) at
`http://localhost:8000/`. Run `npm run build` in `frontend/` at least once
before starting the backend.

### Deploy to Cloud Run

```bash
gcloud run deploy webmapapp --source ./backend --region asia-southeast1 --allow-unauthenticated
```

## License

No license specified.
