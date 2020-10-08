/* global cy */

export function introductionPageTests(testTitle, url, selectors, lessonNames) {
  console.log('lessonName ', lessonNames);
  const warningMessage =
    'Note: Some browser extensions may interfere with elements on the page. ' +
    'If the tests fail, try disabling your extensions for the most reliable ' +
    'experience.';

  describe(`Basic ${testTitle} Introduction page`, function() {
    it('renders', () => {
      cy.visit(url);
      cy.title().should('eq', `${testTitle} | freeCodeCamp.org`);
    });

    if (selectors.warningMessage) {
      it('renders a warning user about extensions', () => {
        cy.visit(url);
        cy.get(selectors.warningMessage).contains(warningMessage);
      });
    }

    it('has go to the first lesson button', () => {
      cy.visit(url);
      cy.get('a').contains('Go to the first lesson');
    });

    it('renders a lesson index', () => {
      cy.visit(url);
      lessonNames.forEach(name => {
        cy.get(selectors.tableOfContents).contains('span', name);
      });
    });
  });
}
