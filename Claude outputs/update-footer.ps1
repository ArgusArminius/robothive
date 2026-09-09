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

$burgerOld = '.burger{display:none;background:none;border:none;cursor:pointer;padding:8px;margin-left:auto}'
$burgerNew = '.burger{display:none;background:none;border:none;cursor:pointer;padding:14px;margin:-14px -8px -14px auto}'

# Root cause of the burger being cut off / unreachable on mobile: the "Subscribe" button
# stays visible next to it below 960px and the two together don't fit, pushing the burger
# partly off the right edge of the screen. Hiding Subscribe on mobile (same breakpoint that
# already hides the desktop nav links) fixes this for good, not just the tap-target size.
# Kept as a single-line replacement (no embedded newlines) so it matches regardless of the
# file's line-ending style.
$navOld = '.nav__links{display:none}'
$navNew = '.nav__links{display:none}.nav__cta{display:none}'

$files = Get-ChildItem -Path $dir -Filter *.html -File
$restoredStub = 0
$addedLink = 0
$alreadyHasLink = 0
$burgerFixed = 0
$burgerAlready = 0
$navFixed = 0
$navAlready = 0
$footerSkipped = @()
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($f in $files) {
    $content = Get-Content -Raw -Path $f.FullName -Encoding UTF8
    $changed = $false

    if ($content.Contains('href="map.html">Database map</a>')) {
        $alreadyHasLink++
    }
    elseif ($content.Contains($stub)) {
        $content = $content.Replace($stub, $fullFooter)
        $restoredStub++
        $changed = $true
        Write-Host "Restored full footer:      $($f.Name)"
    }
    elseif ($content.Contains($dataOld)) {
        $content = $content.Replace($dataOld, $dataNew)
        $addedLink++
        $changed = $true
        Write-Host "Added Database map link:   $($f.Name)"
    }
    else {
        $footerSkipped += $f.Name
    }

    if ($content.Contains($burgerOld)) {
        $content = $content.Replace($burgerOld, $burgerNew)
        $burgerFixed++
        $changed = $true
        Write-Host "Enlarged mobile menu tap:  $($f.Name)"
    }
    elseif ($content.Contains($burgerNew)) {
        $burgerAlready++
    }

    if ($content.Contains($navOld)) {
        $content = $content.Replace($navOld, $navNew)
        $navFixed++
        $changed = $true
        Write-Host "Hid Subscribe on mobile:   $($f.Name)"
    }
    elseif ($content.Contains($navNew)) {
        $navAlready++
    }

    if ($changed) {
        [System.IO.File]::WriteAllText($f.FullName, $content, $utf8NoBom)
    }
}

Write-Host ""
Write-Host "================================"
Write-Host "FOOTER / SITEMAP LINK"
Write-Host "  Full footer restored: $restoredStub"
Write-Host "  Link added to existing footer: $addedLink"
Write-Host "  Already had the link: $alreadyHasLink"
Write-Host "  Skipped (no matching footer pattern found — check manually):"
if ($footerSkipped.Count -eq 0) { Write-Host "    (none)" } else { $footerSkipped | ForEach-Object { Write-Host "    - $_" } }
Write-Host ""
Write-Host "MOBILE MENU TAP TARGET"
Write-Host "  Enlarged: $burgerFixed"
Write-Host "  Already fixed: $burgerAlready"
Write-Host ""
Write-Host "MOBILE MENU VISIBILITY (fixes burger being pushed off-screen)"
Write-Host "  Subscribe hidden on mobile: $navFixed"
Write-Host "  Already fixed: $navAlready"
Write-Host "================================"
