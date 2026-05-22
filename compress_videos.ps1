# Script para comprimir todos os vídeos do projeto
param(
    [int]$Quality = 23,  # CRF: 18-28 (menor = melhor qualidade, maior tamanho)
    [switch]$SkipBackup = $false
)

$ffmpegPath = ".\ffmpeg.exe"

# Verificar se FFmpeg existe
if (!(Test-Path $ffmpegPath)) {
    Write-Host "FFmpeg não encontrado! Execute primeiro: .\setup_ffmpeg.ps1" -ForegroundColor Red
    exit 1
}

Write-Host "=== Compressor de Vídeos - Cantos do Mundo ===" -ForegroundColor Cyan
Write-Host "Qualidade (CRF): $Quality (23 = recomendado para web)" -ForegroundColor Yellow
Write-Host ""

# Criar pasta de backup se necessário
if (!$SkipBackup) {
    $backupDir = ".\public\videos_original_backup"
    if (!(Test-Path $backupDir)) {
        New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
        Write-Host "Pasta de backup criada: $backupDir" -ForegroundColor Green
    }
}

# Encontrar todos os vídeos MP4
$videos = Get-ChildItem -Path ".\public" -Filter "*.mp4" -Recurse

Write-Host "Encontrados $($videos.Count) vídeos para comprimir`n" -ForegroundColor Cyan

$totalSizeBefore = 0
$totalSizeAfter = 0
$processedCount = 0

foreach ($video in $videos) {
    $inputPath = $video.FullName
    $relativePath = $video.FullName.Replace((Get-Location).Path + "\public\", "")
    $outputPath = $video.FullName.Replace(".mp4", "_compressed.mp4")
    
    $sizeBefore = [math]::Round($video.Length / 1MB, 2)
    $totalSizeBefore += $sizeBefore
    
    Write-Host "[$($processedCount + 1)/$($videos.Count)] Comprimindo: $relativePath" -ForegroundColor Yellow
    Write-Host "  Tamanho original: $sizeBefore MB" -ForegroundColor Gray
    
    # Fazer backup do original
    if (!$SkipBackup) {
        $backupPath = Join-Path $backupDir $video.Name
        if (!(Test-Path $backupPath)) {
            Copy-Item $inputPath $backupPath -Force
        }
    }
    
    # Comprimir com FFmpeg
    # Parâmetros otimizados para web:
    # - CRF 23: Qualidade alta com boa compressão
    # - preset medium: Balanço entre velocidade e compressão
    # - scale=-2:720: Reduz para 720p mantendo aspect ratio
    # - b:a 128k: Audio bitrate otimizado
    
    $ffmpegArgs = @(
        "-i", "`"$inputPath`"",
        "-vcodec", "libx264",
        "-crf", $Quality,
        "-preset", "medium",
        "-vf", "scale=-2:720",
        "-acodec", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",  # Otimiza para streaming
        "-y",  # Sobrescrever sem perguntar
        "`"$outputPath`""
    )
    
    $ffmpegCommand = "& `"$ffmpegPath`" " + ($ffmpegArgs -join " ")
    
    try {
        Invoke-Expression $ffmpegCommand 2>&1 | Out-Null
        
        if (Test-Path $outputPath) {
            $compressedFile = Get-Item $outputPath
            $sizeAfter = [math]::Round($compressedFile.Length / 1MB, 2)
            $totalSizeAfter += $sizeAfter
            $reduction = [math]::Round((($sizeBefore - $sizeAfter) / $sizeBefore) * 100, 1)
            
            Write-Host "  Tamanho comprimido: $sizeAfter MB" -ForegroundColor Green
            Write-Host "  Redução: $reduction%" -ForegroundColor Green
            
            # Substituir o original pelo comprimido
            Remove-Item $inputPath -Force
            Rename-Item $outputPath $inputPath -Force
            
            $processedCount++
        } else {
            Write-Host "  ERRO: Arquivo comprimido não foi criado!" -ForegroundColor Red
        }
    } catch {
        Write-Host "  ERRO ao comprimir: $_" -ForegroundColor Red
    }
    
    Write-Host ""
}

# Resumo final
Write-Host "=== RESUMO ===" -ForegroundColor Cyan
Write-Host "Vídeos processados: $processedCount / $($videos.Count)" -ForegroundColor Green
Write-Host "Tamanho total antes: $([math]::Round($totalSizeBefore, 2)) MB" -ForegroundColor Yellow
Write-Host "Tamanho total depois: $([math]::Round($totalSizeAfter, 2)) MB" -ForegroundColor Green
$totalReduction = [math]::Round((($totalSizeBefore - $totalSizeAfter) / $totalSizeBefore) * 100, 1)
Write-Host "Redução total: $totalReduction%" -ForegroundColor Cyan
Write-Host "Economia: $([math]::Round($totalSizeBefore - $totalSizeAfter, 2)) MB" -ForegroundColor Green

if (!$SkipBackup) {
    Write-Host "`nBackups salvos em: .\public\videos_original_backup\" -ForegroundColor Gray
}

Write-Host "`nCompressão concluída! 🎉" -ForegroundColor Green
