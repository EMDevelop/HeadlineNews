// Ensure the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Tests to run when API Fetch Completes
  const runTests = () => {
    describe('feature test', () => {
      context('page loads with 10 stories', () => {
        const stories = document.getElementsByClassName('story').length;
        it('equals 10', () => {
          expect(stories).isEq(10);
        });
      });
    });
  };

  // Hidden Element denoting when a fetch has been complete ('true' = complete)
  elementToObserve = document.getElementById('fetch');

  // Run Tests when Fetch Called and hidden field = true
  observer = new MutationObserver(function (mutationsList, observer) {
    if (mutationsList[0].target.innerHTML === 'false') {
      console.log('Not loaded yet');
    } else {
      runTests();
    }
  });

  // Set observation on the hidden fetch element
  observer.observe(elementToObserve, {
    characterData: false,
    childList: true,
    attributes: false,
  });
});
