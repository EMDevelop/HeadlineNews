# ChainEd

A single page web app which reads and summarises cryptocurrency news from the Guardian API.

---

https://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1&api-key=test

http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=https://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1&api-key=test

#### User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are

As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at

As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story

As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story

As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks

As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

#### Domain Model

`class: Headlines`

| Methods         | Attributes     |
| --------------- | -------------- |
| getStories()    | stories: Array |
| getStory(index) |                |

`class: Story`

| Methods | Attributes                 |
| ------- | -------------------------- |
|         | image: String(URL)         |
|         | title: String              |
|         | body: String               |
|         | originalStory: String(URL) |

#### Interface

- Fetch
  - Stories (image, title, body)

#### setup

```
touch README.md
echo "# HeadlineNews" >> README.md
mkdir spec
cd spec
mkdir frontend
mkdir backend
cd frontend
mkdir specFunctions
cd specFunctions
touch matchers.js
touch specCommands.js
....
touch spec/backend/featureSpec.js
mkdir public
mkdir public/styles
cd public/styles
..
..
mkdir src
touch src/interface.js
npm init
npm install http-server
touch .gitignore
echo "node_modules" >> .gitignore
git add .gitignore
git commit -m "Adding .gitignore"
touch spec/spec.html
mkdir views
touch views/index.html
```

### Question:

##### This works

https://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1&api-key=test

##### This complains it doesn't start with `must start with http://content.guardianapis.com`

http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=https://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1

##### This has completely different results using the makers api.

https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1

### Single Page Web App - .env var

```
npm i dotenv
echo '.env' >> .gitignore
git add .
git commit -m "adding .env to gitignore"
touch .env
echo 'KEY=' >> .env
git add .
git status
```

I've tried:

- adding "type": "module", to my packages.json
- then import dotenv from 'dotenv';
- but I get the error interface.js:6 Uncaught SyntaxError: Cannot use import statement outside a module
- I also tried changing the index.html to <script type="module" src="./src/interface.js"></script>
- also tried importing with an exact path: import dotenv from '../node_modules/dotenv/config';
- but I got `GET http://127.0.0.1:8080/node_modules/dotenv/config net::ERR_ABORTED 404 (Not Found)`
  also tried
- require('dotenv').config();
- but then i got Uncaught SyntaxError: Cannot use import statement outside a module

Then i tried the below as per https://stackoverflow.com/questions/47969045/require-is-not-defined-error-when-trying-to-set-up-env-file

```
sudo npm install -g browserify
browserify ./src/interface.js -o bundle.js
```
