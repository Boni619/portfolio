#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cp dist/index.html dist/404.html
cd dist
# if you are deploying to a custom domain
echo 'www.bonigope.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Boni619/portfolio.git main:gh-pages
cd -