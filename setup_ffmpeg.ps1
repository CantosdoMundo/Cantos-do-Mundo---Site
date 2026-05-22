# Script para baixar e instalar FFmpeg automaticamente
Write-Host "Baixando FFmpeg..." -ForegroundColor Cyan

$ffmpegUrl = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
$downloadPath = "$env:TEMP\ffmpeg.zip"
$extractPath = "$PSScriptRoot\ffmpeg"

# Criar diretório se não existir
if (!(Test-Path $extractPath)) {
    New-Item -ItemType Directory -Path $extractPath | Out-Null
}

# Baixar FFmpeg
Write-Host "Fazendo download do FFmpeg..." -ForegroundColor Yellow
try {
    Invoke-WebRequest -Uri $ffmpegUrl -OutFile $downloadPath -UseBasicParsing
    Write-Host "Download concluído!" -ForegroundColor Green
} catch {
    Write-Host "Erro ao baixar FFmpeg: $_" -ForegroundColor Red
    exit 1
}

# Extrair
Write-Host "Extraindo arquivos..." -ForegroundColor Yellow
try {
    Expand-Archive -Path $downloadPath -DestinationPath $extractPath -Force
    
    # Encontrar ffmpeg.exe e copiar para a raiz
    $ffmpegExe = Get-ChildItem -Path $extractPath -Recurse -Filter "ffmpeg.exe" | Select-Object -First 1
    if ($ffmpegExe) {
        Copy-Item $ffmpegExe.FullName -Destination "$PSScriptRoot\ffmpeg.exe" -Force
        Write-Host "FFmpeg instalado com sucesso em: $PSScriptRoot\ffmpeg.exe" -ForegroundColor Green
    }
} catch {
    Write-Host "Erro ao extrair: $_" -ForegroundColor Red
    exit 1
}

# Limpar
Remove-Item $downloadPath -Force
Write-Host "`nFFmpeg pronto para usar!" -ForegroundColor Green
Write-Host "Agora você pode executar: .\compress_videos.ps1" -ForegroundColor Cyan
