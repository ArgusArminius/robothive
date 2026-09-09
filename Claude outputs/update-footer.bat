@echo off
cd /d "%~dp0"
echo Updating all pages: sitemap footer + Database map link + fixed mobile menu button...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "update-footer.ps1"
echo.
echo Done. This window can be closed.
pause
