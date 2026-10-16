# SafePause: one command to run website + API on Windows
#   powershell -ExecutionPolicy Bypass -File run.ps1          (rules + LLM texts, no Laya download)
#   powershell -ExecutionPolicy Bypass -File run.ps1 -Laya    (also load the Laya model, ~1.3 GB on first start)
param([switch]$Laya)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Created .env - add RELAY_API_KEY for AI texts and speech-to-text (optional)."
}
Set-Location backend
if (-not (Test-Path ".venv")) { py -3 -m venv .venv }
$py = ".\.venv\Scripts\python.exe"
& $py -m pip install -q --upgrade pip
if ($Laya) {
  & $py -m pip install -q -r requirements.txt
  $env:LAYA_ENABLED = "1"
} else {
  & $py -m pip install -q fastapi "uvicorn[standard]" httpx python-dotenv pytest
  $env:LAYA_ENABLED = "0"
}
Write-Host "SafePause runs on http://127.0.0.1:8000  (app only: http://127.0.0.1:8000/?app)  - stop with Ctrl+C"
Start-Process "http://127.0.0.1:8000"
& $py app.py
