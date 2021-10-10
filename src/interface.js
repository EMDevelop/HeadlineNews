document.addEventListener('DOMContentLoaded', () => {
  // Reference Model
  const headlines = new Headlines();

  // Fetch Stories from Guardian via Pipedream
  // For each story in the array of 10 stories, create a new story object
  // Add the story object into the headlines object to be displayed on screen
  const HTTPGETStories = () => {
    fetch('https://en2lkcel4jj8w1p.m.pipedream.net')
      .then((response) => response.json())
      .then((data) => {
        data.storys.forEach((story) => {
          headlines.addStory(
            new Story({
              image: story.fields.thumbnail,
              title: story.webTitle,
              body: story.fields.bodyText,
              originalStory: story.webUrl,
            })
          );
        });
        console.log(headlines.stories);
      });
  };

  // Call Fetch
  HTTPGETStories();
});
