$ErrorActionPreference = 'Stop'
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $dir

$footerFile = Join-Path $dir 'footer-full.html'
if (-not (Test-Path $footerFile)) {
    Write-Host "ERROR: footer-full.html not found next to this script. Aborting." -ForegroundColor Red
    exit 1
}
$fullFooter = Get-Content -Raw -Path $footerFile

$stub = '<footer class="foot"><div class="foot__in"><div class="foot__brand"></div></div></footer>'
$dataOld = '<a href="regulation.html">Regulation</a></div><div><h4>Industries</h4>'
$dataNew = '<a href="regulation.html">Regulation</a><a href="map.html">Database map</a></div><div><h4>Industries</h4>'

$files = Get-ChildItem -Path $dir -Filter *.html -File
$restoredStub = 0
$addedLink = 0
$alreadyHasLink = 0
$skipped = @()
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($f in $files) {
    $content = Get-Content -Raw -Path $f.FullName -Encoding UTF8

    if ($content.Contains('href="map.html">Database map</a>')) {
        $alreadyHasLink++
        continue
    }

    if ($content.Contains($stub)) {
        $content = $content.Replace($stub, $fullFooter)
        [System.IO.File]::WriteAllText($f.FullName, $content, $utf8NoBom)
        $restoredStub++
        Write-Host "Restored full footer:      $($f.Name)"
    }
    elseif ($content.Contains($dataOld)) {
        $content = $content.Replace($dataOld, $dataNew)
        [System.IO.File]::WriteAllText($f.FullName, $content, $utf8NoBom)
        $addedLink++
        Write-Host "Added Database map link:   $($f.Name)"
    }
    else {
        $skipped += $f.Name
    }
}

Write-Host ""
Write-Host "================================"
Write-Host "Full footer restored: $restoredStub"
Write-Host "Link added to existing footer: $addedLink"
Write-Host "Already had the link: $alreadyHasLink"
Write-Host "Skipped (no matching footer pattern found — check manually):"
if ($skipped.Count -eq 0) { Write-Host "  (none)" } else { $skipped | ForEach-Object { Write-Host "  - $_" } }
Write-Host "================================"
