@echo off
setlocal EnableDelayedExpansion
cd /d "%~dp0"

echo Fetching world country boundary data for the map...
echo.

if not exist "_geo-source" mkdir "_geo-source"

set "url1=https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson"
set "out1=_geo-source\ne_110m_admin_0_countries.geojson"

curl.exe -fsSL --max-time 60 -o "%out1%" "%url1%"
if errorlevel 1 (
    echo FAILED to download %url1%
    > "_geo-source\_geo_status.txt" echo FAILED primary
) else (
    for %%F in ("%out1%") do set "sz=%%~zF"
    echo Downloaded !out1! (!sz! bytes^)
    > "_geo-source\_geo_status.txt" echo DONE primary bytes=!sz!
)

echo.
echo Done. This window can be closed.
pause
