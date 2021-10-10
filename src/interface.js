document.addEventListener('DOMContentLoaded', () => {
  // Reference Model
  const headlines = new Headlines();

  // Fetch Stories from Guardian via Pipedream
  const HTTPGETStories = () => {
    fetch('https://en2lkcel4jj8w1p.m.pipedream.net')
      .then((response) => response.json())
      .then((data) => {
        data.storys.forEach((story) => {
          headlines.addStory(story);
        });
      });
  };
});
