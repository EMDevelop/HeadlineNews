# HeadlineNews

A single page web app which reads and summarises headlines from the Guardian API.

---

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
