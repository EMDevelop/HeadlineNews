class Headlines {
  // INIT
  constructor() {
    this.stories = [];
  }
  // GETTERS
  getAllStories() {
    return this.stories;
  }
  // SETTERS
  addStory(story) {
    this.stories.push(story);
  }
}
