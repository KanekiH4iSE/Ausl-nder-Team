#!/usr/bin/env bash
# SafePause: one command to run website + API on macOS/Linux
#   ./run.sh          rules + LLM texts, no Laya download
#   ./run.sh --laya   also load the Laya model (~1.3 GB on first start)
set -e
cd "$(dirname "$0")"
[ -f .env ] || { cp .env.example .env; echo "Created .env - add RELAY_API_KEY for AI texts and speech-to-text (optional)."; }
cd backend
[ -d .venv ] || python3 -m venv .venv
.venv/bin/python -m pip install -q --upgrade pip
if [ "$1" = "--laya" ]; then
  .venv/bin/python -m pip install -q -r requirements.txt
  export LAYA_ENABLED=1
else
  .venv/bin/python -m pip install -q fastapi "uvicorn[standard]" httpx python-dotenv pytest
  export LAYA_ENABLED=0
fi
echo "SafePause runs on http://127.0.0.1:8000  (app only: /?app)  - stop with Ctrl+C"
.venv/bin/python app.py
