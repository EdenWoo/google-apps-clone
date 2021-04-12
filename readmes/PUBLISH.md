# Publish to google pages
git checkout -b gh-pages
ng build --prod --base-href .
npx angular-cli-ghpages --dir=dist/google-news-clone
npx ngh --dir=dist/google-news-clone
