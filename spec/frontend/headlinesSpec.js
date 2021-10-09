describe('Headline', () => {
  const t1 = new Headlines();

  const mockSingleStory = {
    image: '1',
    title: '2',
    body: '3',
    originalStory: '4',
  };

  context('Initialised', () => {
    it('initialises as a headline with an empty array', () => {
      expect(t1.stories.length).isEq(0);
    });
  });

  context('Headline Functions', () => {
    it('Gets All Headlines', () => {
      expect(t1.getAllStories()).isInstanceOf(Array);
      expect(t1.getAllStories().length).isEq(0);
    });

    it('adds a new headline', () => {
      t1.addStory(mockSingleStory);
      expect(t1.getAllStories().length).isEq(1);
    });
  });
});
