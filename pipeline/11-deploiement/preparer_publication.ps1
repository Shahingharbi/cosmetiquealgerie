$ErrorActionPreference = 'Stop'

# Prepare le depot de publication, a cote de l'atelier.
#
# POURQUOI UN DEPOT SEPARE
# Le depot GitHub du site est PUBLIC. L'atelier (ce dossier) contient des
# choses qui n'ont rien a y faire : les donnees scrapees (donnees/), les
# scripts de scraping (pipeline/), les documents de strategie SEO (docs/), les
# configurations d'outils herites du gabarit, et un historique git qui remonte
# au clone d'origine et au depot de l'auteur du gabarit.
#
# Le depot de publication ne contient que ce dont le site a besoin pour se
# construire et tourner, avec un historique qui lui est propre. Il est
# reconstruit a chaque publication a partir de l'atelier : l'atelier reste la
# source de verite, la publication n'en est qu'une projection.
#
# Usage : powershell -File pipeline\11-deploiement\preparer_publication.ps1

$atelier = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$publication = Join-Path (Split-Path $atelier -Parent) 'cosmetiquealgerie-publication'

# Ce qui part, et rien d'autre.
$dossiers = @('src', 'data', 'public', 'pipeline\11-deploiement')
$fichiers = @(
  'package.json', 'package-lock.json',
  'next.config.ts', 'tsconfig.json', 'postcss.config.mjs', 'eslint.config.mjs', 'components.json',
  '.gitignore', '.gitattributes', '.vercelignore', '.nvmrc', '.env.example',
  'LICENSE'
)

if (-not (Test-Path -LiteralPath $publication)) {
  New-Item -ItemType Directory -Path $publication | Out-Null
}

# Le robot d'indexation pousse son journal sur GitHub chaque jour. On recupere
# ces commits AVANT de mettre a jour les fichiers : sans cela, le push suivant
# serait refuse, et un « git push --force » pour passer outre effacerait le
# journal. --autostash protege une preparation precedente non encore commitee.
if (Test-Path -LiteralPath (Join-Path $publication '.git')) {
  git -C $publication pull --rebase --autostash --quiet
  if ($LASTEXITCODE -ne 0) { throw 'git pull a echoue dans le depot de publication : resoudre avant de publier.' }
}

# Controle prealable : jamais de publication si public/ contient des visuels
# rejetes ou des dossiers bruts.
& node (Join-Path $atelier 'pipeline\11-deploiement\verifier_public.mjs')
if ($LASTEXITCODE -ne 0) { throw 'public/ non conforme : publication annulee.' }

# Meme principe pour le texte : un accent casse dans le code s'affiche tel quel
# sur le site et dans Google (542 pages marque touchees jusqu'au 30/09/2026).
& node (Join-Path $atelier 'pipeline\11-deploiement\verifier_encodage.mjs')
if ($LASTEXITCODE -ne 0) { throw 'texte mal encode : publication annulee.' }

foreach ($d in $dossiers) {
  $src = Join-Path $atelier $d
  $dst = Join-Path $publication $d
  # /MIR : miroir exact, les fichiers retires de l'atelier le sont aussi ici.
  # /XD  : jamais de dossiers bruts, meme s'ils reapparaissaient.
  # /XF  : le journal du robot d'indexation et son verrou ne vivent QUE dans le
  #        depot de publication, ou la CI les ecrit chaque jour. Sans cette
  #        exclusion, /MIR les supprimerait a chaque publication (ils n'existent
  #        pas dans l'atelier) : l'historique d'indexation serait perdu, et le
  #        robot re-soumettrait tout depuis zero. C'est la panne du 26/09 sur
  #        le site de parfum, par un autre chemin.
  robocopy $src $dst /MIR /NFL /NDL /NJH /NJS /NP /XD 'produits' 'produits-obf' /XF 'indexing-log.json' '*.lock' | Out-Null
  # robocopy : 0 a 7 = succes, 8 et plus = echec.
  if ($LASTEXITCODE -ge 8) { throw ("robocopy a echoue sur " + $d) }
}

foreach ($f in $fichiers) {
  Copy-Item -LiteralPath (Join-Path $atelier $f) -Destination (Join-Path $publication $f) -Force
}

# README propre au site : celui de l'atelier decrit le gabarit d'origine.
$readme = @(
  '# Cosmetique Algerie',
  '',
  'Code du site cosmetiquealgerie.com : Next.js 16, React 19, Tailwind 4.',
  '',
  '```bash',
  'npm install',
  'npm run build',
  'npm run start',
  '```',
  '',
  'Les variables d environnement sont decrites dans `.env.example`.'
)
[System.IO.File]::WriteAllLines((Join-Path $publication 'README.md'), $readme, (New-Object System.Text.UTF8Encoding($false)))

$n = (Get-ChildItem -LiteralPath $publication -Recurse -File -Exclude '.git' |
      Where-Object { $_.FullName -notlike '*\.git\*' }).Count
Write-Output ("Publication prete : " + $publication)
Write-Output ("Fichiers           : " + $n)
