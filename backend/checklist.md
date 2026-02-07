# IntroConnect Backend Development Checklist

#### **Phase 1: Environment Setup**
- [ ] Create and activate Python virtual environment (`venv`)
- [ ] Create `requirements.txt` (`fastapi`, `uvicorn`, `google-generativeai`, `python-dotenv`)
- [ ] Create `.env` file and set `GEMINI_API_KEY`

#### **Phase 2: FastAPI Backbone**
- [ ] Create `main.py` (App initialization & CORS settings)
- [ ] Package folders (Create `__init__.py` in `routes/` and `engine/`)
- [ ] Verify server status via Health Check API (`GET /`)

#### **Phase 3: AI Analysis Engine**
- [ ] Create `engine/analyzer.py` (**Google Gemini** integration)
- [ ] Design multi-source analysis prompt (Chat, Posts, etc.)
- [ ] Implement JSON enforcement logic for output

#### **Phase 4: Matching Logic**
- [ ] Create `engine/matcher.py`
- [ ] Implement `Must Avoid` hard filter logic
- [ ] Implement Social Energy scoring & candidate filtering
- [ ] Implement interest-based weighting & ranking

#### **Phase 5: API Routes & Registration**
- [ ] Create `routes/matching.py` (Analysis & Match result endpoints)
- [ ] Create `routes/auth.py` (Basic user identification)
- [ ] Register all routers in `main.py`

#### **Phase 6: Final Verification**
- [ ] Verify Swagger UI accessibility (`/docs`)
- [ ] Test AI analysis with sample data inputs
