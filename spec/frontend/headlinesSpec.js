describe('Headline', () => {
  context('Initialised', () => {
    it('initialises as a headline with an empty array', () => {
      const t1 = new Headlines();
      expect(t1.stories.length).isEq(0);
    });
  });
});
