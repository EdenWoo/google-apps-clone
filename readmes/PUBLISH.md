# Publish to google pages
git checkout -b gh-pages
ng build google-news-clone --prod --base-href .
npx angular-cli-ghpages --dir=dist/apps/google-news-clone
npx ngh --dir=dist/apps/google-news-clone

## https://edenwoo.github.io/google-news-clone
