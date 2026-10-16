# SafePause: website + API in one container (Deployxa, Railway, Render, Fly, any Docker host)
# Laya is off here: the free tiers don't have the RAM for the 1.3 GB model. Rules + LLM texts still run.
FROM python:3.12-slim
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 HOST=0.0.0.0 PORT=8000 LAYA_ENABLED=0
COPY backend/requirements-deploy.txt backend/requirements-deploy.txt
RUN pip install --no-cache-dir -r backend/requirements-deploy.txt
COPY index.html ./
COPY css ./css
COPY js ./js
COPY backend ./backend
WORKDIR /app/backend
EXPOSE 8000
CMD ["python", "app.py"]
