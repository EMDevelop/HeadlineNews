describe('Story', () => {
  context('Initialise', () => {
    it('creates a new story', () => {
      const story = new Story({
        image:
          'https://image.shutterstock.com/image-vector/world-wide-web-icon-trendy-600w-1492720382.jpg',
        title: 'dummy Title',
        body: 'things and stuff and more things and more stuff and way more things and way more stuff',
        originalStory: 'https://github.com/EMDevelop',
      });
      expect(story.title).isEq('dummy Title');
      expect(story.body).isEq(
        'things and stuff and more things and more stuff and way more things and way more stuff'
      );
    });
  });
});
