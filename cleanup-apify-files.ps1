# Cleanup Script - Remove Apify-Specific Files
# Run this manually to clean up old Apify files

Write-Host "🧹 Cleaning up Apify-specific files..." -ForegroundColor Cyan

$filesToRemove = @(
    ".actor",
    "INPUT_SCHEMA.json",
    "APIFY_DEPLOYMENT.md",
    "SPOTIFY_AUTH_FIX.md",
    "TESTING_CHECKLIST.md",
    "SUBMISSION_PACKAGE.md",
    "ACTION_PLAN.md",
    "DEMO_SCRIPT.md",
    "FINAL_CHECKLIST.md",
    "REDIRECT_GUIDE.md",
    ".credentials.txt",
    "scripts",
    "Playlistify"
)

$removed = 0
$notFound = 0

foreach ($item in $filesToRemove) {
    if (Test-Path $item) {
        Remove-Item -Recurse -Force $item
        Write-Host "  ✅ Removed: $item" -ForegroundColor Green
        $removed++
    } else {
        Write-Host "  ⏭️  Skipped: $item (not found)" -ForegroundColor Gray
        $notFound++
    }
}

Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "  Removed: $removed files/folders" -ForegroundColor Green
Write-Host "  Not found: $notFound files/folders" -ForegroundColor Gray
Write-Host ""
Write-Host "✨ Cleanup complete! Project is now Railway-ready." -ForegroundColor Green
