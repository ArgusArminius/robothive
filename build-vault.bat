@echo off
setlocal EnableDelayedExpansion
cd /d "%~dp0"

echo Building behindrobotics.com image vault...
echo.

rem clean up test artifacts from the connectivity check
if exist "img\_test1.jpg" del "img\_test1.jpg"
if exist "img\_test_status.txt" del "img\_test_status.txt"
if exist "img\_curl_version.txt" del "img\_curl_version.txt"
if exist "test-curl.bat" del "test-curl.bat"

if exist "img\_vault_status.txt" del "img\_vault_status.txt"
if not exist "img\components" mkdir "img\components"
if not exist "img\robots" mkdir "img\robots"
if exist "img\_failed.log" del "img\_failed.log"

set total=0
set ok=0
set skip=0
set fail=0

for /f "usebackq tokens=1,2 delims=	" %%A in ("image-list.tsv") do (
    set /a total+=1
    set "dest=%%A"
    set "src=%%B"
    set "doskip=0"
    if exist "!dest!" (
        for %%F in ("!dest!") do if %%~zF gtr 0 set "doskip=1"
    )
    if "!doskip!"=="1" (
        set /a skip+=1
    ) else (
        curl.exe -fsSL --max-time 25 -o "!dest!" "!src!" >nul 2>&1
        if errorlevel 1 (
            set /a fail+=1
            >>"img\_failed.log" echo !dest!	!src!	curl_error
            if exist "!dest!" del "!dest!"
        ) else (
            set "zsize=0"
            for %%F in ("!dest!") do set zsize=%%~zF
            if "!zsize!"=="0" (
                set /a fail+=1
                >>"img\_failed.log" echo !dest!	!src!	zero_bytes
                del "!dest!"
            ) else (
                set /a ok+=1
            )
        )
    )
    set /a rmod=!total! %% 5
    if "!rmod!"=="0" ping -n 2 127.0.0.1 >nul
    set /a pmod=!total! %% 50
    if "!pmod!"=="0" echo Progress: !total! processed  ^(ok=!ok! skip=!skip! fail=!fail!^)
)

echo.
echo ================================
echo Total:     !total!
echo Succeeded: !ok!
echo Skipped:   !skip!
echo Failed:    !fail!
echo ================================

rem --- verification pass: count all files under img/, total bytes, zero-byte check ---
set vcount=0
set vbytes=0
set vzero=0
for /r "img" %%F in (*) do (
    if /I not "%%~nxF"=="_failed.log" if /I not "%%~nxF"=="_vault_status.txt" (
        set /a vcount+=1
        set /a vbytes+=%%~zF
        if "%%~zF"=="0" set /a vzero+=1
    )
)

echo Files under img\: !vcount!
echo Total bytes:      !vbytes!
echo Zero-byte files:  !vzero!

> "img\_vault_status.txt" echo DONE total=!total! ok=!ok! skip=!skip! fail=!fail! files=!vcount! bytes=!vbytes! zerobyte=!vzero!

echo.
echo Done. This window can be closed.
pause
