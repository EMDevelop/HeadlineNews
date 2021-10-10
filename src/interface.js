document.addEventListener('DOMContentLoaded', () => {
  // Reference Model
  const headlines = new Headlines();

  // Fetch Stories from Guardian via Pipedream
  // For each story in the array of 10 stories, create a new story object
  // Add the story object into the headlines object to be displayed on screen
  const setFetchComplete = (status) => {
    document.getElementById('fetch').innerHTML = status;
  };

  // retrieve stories from Model
  const getStories = () => {
    return headlines.getAllStories();
  };

  // HTML for a Story card
  const insertStoryHTML = (story, storyContainer) => {
    storyContainer.insertAdjacentHTML(
      'beforeend',
      `
        <div class="story">
          <div class="thumbnail">
            <img
              src="${story.image}"
            />
          </div>
          <div class="title">${story.title}</div>
          <div class="link">
            <a href="${story.originalStory}">Source URL</a>
          </div>
          <div class="preview">
            ${story.body.substr(0, 50)}...
          </div>
          <div class="toggle">
            <input id="toggle" type="submit" value="See more..." />
            <div class="body hidden">
              ${story.body}
            </div>
          </div>
        </div>
      `
    );
  };

  // User clicks on a "see more" on each card
  const toggleListner = () => {
    const buttons = document.querySelectorAll('#toggle');
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      button.addEventListener('click', (e) => {
        // handleToggleclick(e);
        if (e.target.value === 'See more...') {
          e.target.value = 'Show less';
          button.parentElement.lastElementChild.className = 'body';
        } else {
          e.target.value = 'See more...';
          button.parentElement.lastElementChild.className = 'body hidden';
        }
      });
    });
  };

  // Update UI
  const updateScreen = () => {
    const storyContainer = document.getElementById('stories');
    const stories = getStories();
    stories.forEach((story) => {
      insertStoryHTML(story, storyContainer);
    });
    toggleListner();
  };

  // API call fetch to PIPEDREAM
  const HTTPGETStories = () => {
    setFetchComplete(false);
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
        // After successful fetch...
        setFetchComplete(true);
        updateScreen();
      });
  };

  // Call Fetch
  HTTPGETStories();
});
