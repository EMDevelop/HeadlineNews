describe('Headline', () => {
  context('Initialised', () => {
    it('initialises as a headline with an empty array', () => {
      const t1 = new Headlines();
      expect(t1.stories.length).isEq(0);
    });
  });

  context('Headline Functions', () => {
    it('Gets All Headlines', () => {
      const t2 = new Headlines();
      expect(t2.getAllStories()).isInstanceOf(Array);
      expect(t2.getAllStories().length).isEq(0);
    });
  });
});
