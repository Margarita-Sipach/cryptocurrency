/// <reference types="cypress" />
import { values } from 'cypress/types/lodash';
import { tableHeader } from '../../src/data';

describe('Cryptocurrency App (Main Page)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cryptocurrency/');
    cy.get('[data-cy="table-header"]').as('tableHeader');
    cy.get('[data-cy="table-row"]').as('tableRows');
    cy.get('[data-cy="table-row"]:first-of-type').as('tableFirstRow');
    cy.get('[data-cy="table-row"]:last-of-type').as('tableLastRow');
  });

  it('table loads successfully', () => {
    cy.get('[data-cy="table"]').should('be.visible');
    cy.get('@tableHeader').should('be.visible');
    tableHeader.forEach((item) => {
      cy.get('@tableHeader').contains(item);
    });
    cy.get('@tableRows').should('have.length', 10);
    cy.screenshot();
  });

  it('pagination work successfully', () => {
    cy.get('button').contains(3).click();
    cy.get('@tableRows').contains(21);
    cy.get('@tableRows').contains(25);
    cy.get('@tableRows').contains(30);
    cy.screenshot();
  });

  it('click on table row work successfully', () => {
    cy.get('@tableFirstRow').find('[data-cy="name"]').click();
    cy.get('@tableFirstRow')
      .invoke('attr', 'id')
      .then((id) => {
        cy.get('@tableHeader')
          .url()
          .then((url) => url.endsWith(`/cryptocurrency/${id}/`));
      });
    cy.screenshot();
  });

  it('buying currency work successfully', () => {
    const data = [
      {
        value: 10,
        row: '@tableFirstRow',
      },
      {
        value: 0.5,
        row: '@tableLastRow',
      },
    ];

    let sum = 0;

    cy.get('@tableFirstRow').find('button').click();
    cy.screenshot();
    cy.get('input').type('value').should('have.value', '');
    cy.screenshot();
    cy.get('[data-cy="modal-content"]').type('{esc}');

    data.forEach((item) => {
      cy.get(item.row)
        .invoke('attr', 'id')
        .then((id) => {
          cy.get(item.row).find('button').click();
          cy.get('input').type(`${item.value}`).should('have.value', `${item.value}`);
          cy.screenshot();
          cy.contains('Submit').click();
          cy.screenshot();
          cy.request(`https://api.coincap.io/v2/assets/${id}`).then(({ body }) => {
            sum += +body.data.priceUsd * +item.value;
            cy.get('[data-cy="balance"]').contains(`$ ${sum.toFixed(3)}`);
            cy.get('[data-cy="diff"]').contains('0.000 (0.000%)');
          });
        });
    });
  });
});

describe('Cryptocurrency App (Currency Page)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cryptocurrency/bitcoin/');
  });

  it('page render successfully', () => {
    cy.get('[data-cy="table-row"]').should('have.length', 1);
    cy.get('[data-cy="table-row"]').should('contain.text', 'Bitcoin');
    cy.get('[data-cy="graph"]').should('exist');
    cy.screenshot();
  });
});

describe('Cryptocurrency App (Header)', () => {
  const initData: [string, number][] = [];

  beforeEach(() => {
    cy.visit('http://localhost:5173/cryptocurrency/');
    cy.get('[data-cy="table-row"]:first-of-type').as('tableFirstRow');
    cy.get('[data-cy="table-row"]:last-of-type').as('tableLastRow');
    cy.get('[data-cy="user-portfolio"]').as('userPortfolio');

    const data = [
      {
        selector: '@tableFirstRow',
        amount: 10,
      },
      {
        selector: '@tableLastRow',
        amount: 15,
      },
      {
        selector: '@tableFirstRow',
        amount: 8,
      },
    ];

    data.forEach((data) => {
      cy.get(data.selector).find('button').click();
      cy.get('input').type(`${data.amount}`);
      cy.contains('Submit').click();
      cy.get(data.selector)
        .invoke('attr', 'id')
        .then((id) => {
          if (id) initData.push([id, data.amount]);
        });
    });
  });

  it('show the most popular currency work successfully', () => {
    cy.get('[data-cy="popular-currency"]').each((item, index) => {
      cy.get('[data-cy="table-row"]')
        .eq(index)
        .should('contain', item.children('[data-cy="popular-currency-name"]').text())
        .should(
          'contain',
          item.children('[data-cy="popular-currency-price"]').text().replace('$ ', '')
        );
    });
    cy.screenshot();
  });

  it('data save when page reload', () => {
    cy.get('@userPortfolio').click();
    const initData: { name: string; price: string }[] = [];
    cy.get('[data-cy="portfolio-table-row"]').each(($item) => {
      initData.push({
        name: $item.first().text(),
        price: $item.last().text(),
      });
    });
    cy.reload();
    cy.get('@userPortfolio').click();
    cy.screenshot();
    cy.get('[data-cy="portfolio-table-row"]').each(($item, index) => {
      expect($item.first().text()).equal(initData[index].name);
      expect($item.last().text()).equal(initData[index].price);
    });
  });

  it('delete not all currency from portfolio work successfully', () => {
    cy.get('@userPortfolio').click();
    cy.screenshot();
    cy.get('[data-cy="portfolio-table-row"]').last().find('button').click();
    cy.screenshot();
    cy.get('[data-cy="portfolio-table-row"]').should('have.length', 1);

    cy.get('[data-cy="portfolio-table-row"]')
      .first()
      .find('[data-cy="portfolio-table-name"]')
      .then((id) => {
        cy.get('[data-cy="modal-content"]').type('{esc}');
        cy.request(`https://api.coincap.io/v2/assets/${id.text()}`).then(({ body }) =>
          cy.get('[data-cy="balance"]').contains(`$ ${(18 * +body.data.priceUsd).toFixed(3)}`)
        );
      });

    cy.get('[data-cy="diff"]').contains('0.000 (0.000%)');
    cy.screenshot();
  });

  it('delete all currency from portfolio work successfully', () => {
    cy.get('@userPortfolio').click();
    cy.screenshot();
    cy.get('[data-cy="portfolio-table"] button').each(($btn) => $btn.click());
    cy.get('[data-cy="portfolio-row"]').should('not.exist');
    cy.screenshot();
    cy.get('[data-cy="modal-content"]').type('{esc}');
    cy.get('[data-cy="balance"]').contains('0.000');
    cy.get('[data-cy="diff"]').should('not.exist');
    cy.screenshot();
  });

  it('click on home button work successfully', () => {
    cy.visit('http://localhost:5173/cryptocurrency/bitcoin/');
    cy.get('[data-cy="home"]').click();
    cy.get('@userPortfolio')
      .url()
      .then((url) => url.endsWith(`/cryptocurrency/`));
    cy.screenshot();
  });
});
