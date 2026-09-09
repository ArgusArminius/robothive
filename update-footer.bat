@echo off
cd /d "%~dp0"
echo Updating footer across all pages (adding "Database map" to the sitemap)...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "update-footer.ps1"
echo.
echo Done. This window can be closed.
pause
