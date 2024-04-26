# setup q5.js docs site

# download p5 example assets
curl https://p5js.org/offline-reference/p5-reference.zip > p5-reference.zip;
# curl https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js > p5.js;
curl https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js > p5.min.js;
unzip p5-reference.zip;
mv p5-reference/assets assets
# rm -rf p5-reference
# rm p5-reference.zip

# copy files over
# cp ../src/q5.js q5.js
cp ../dist/q5.min.js q5.min.js
cp ../tests.js tests.js
cp ../README.md README.md

# build site
node make_site.js
