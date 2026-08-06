#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch.
set -euo pipefail

cd "$(dirname "$0")/.."
npm run build
touch dist/.nojekyll

tmp="$(mktemp -d)"
cp -R dist/. "$tmp"/
cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy built site"
git push -f https://github.com/Abagel-coder/Abagel-coder.github.io.git gh-pages
cd - >/dev/null
rm -rf "$tmp"
echo "Deployed. Live at https://abagel-coder.github.io/ in ~1 minute."
