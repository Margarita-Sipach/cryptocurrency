/// <reference types="cypress" />
import { getDataById, getAllData } from '../../src/api';
import { tableHeader } from '../../src/data';

describe('Cryptocurrency App (Main Page)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cryptocurrency/');
  });

  it('table loads successfully', () => {
    cy.get('[data-cy="table"]').should('be.visible');
    cy.get('[data-cy="table-header"]').should('be.visible');
    tableHeader.forEach((item) => {
      cy.get('[data-cy="table-header"]').contains(item);
    });
    cy.get('[data-cy="table-row"]').should('have.length', 10);
    cy.screenshot();
  });

  it('pagination work successfully', () => {
    cy.get('button').contains(3).click();
    cy.get('[data-cy="table-row"]').contains(21);
    cy.get('[data-cy="table-row"]').contains(25);
    cy.get('[data-cy="table-row"]').contains(30);
    cy.screenshot();
  });

  it('click on table row work successfully', () => {
    const id = cy
      .get('[data-cy="table-row"]:first-of-type [data-cy="name"]')
      .then((item) => item.text());
    cy.get('[data-cy="table-row"]:first-of-type [data-cy="name"]').click();
    cy.get('[data-cy="table-header"]')
      .url()
      .then((url) => url.endsWith(`/cryptocurrency/${id}/`));
    cy.screenshot();
  });

  it('buying currency work successfully', () => {
    const inputValues = ['value', '10', '0.5'];
    cy.get('[data-cy="table-row"]:first-of-type button').click();
    cy.get('input').type(inputValues[0]).should('have.value', '');
    cy.screenshot();
    cy.get('input').type(inputValues[1]).should('have.value', inputValues[1]);
    cy.screenshot();
    cy.contains('Submit').click();
    cy.screenshot();

    cy.get('[data-cy="table-row"]:first-of-type button').click();
    cy.get('input').type(inputValues[2]).should('have.value', inputValues[2]);
    cy.screenshot();
    cy.contains('Submit').click();
    cy.screenshot();

    // cy.get('[data-cy="table-row"]:first-of-type [data-cy="name"]').then((item) => {
    //   getDataById('bitcoin').then((data) => {
    //     cy.get('[data-cy="balance"]').contains(
    //       `$ ${(+data.priceUsd * (+inputValues[1] + +inputValues[2])).toFixed(3)}`
    //     );
    //     cy.get('[data-cy="diff"]').contains('0.000 (0.000%)');
    //   });
    // });
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
  const initData = { portfolio: [], oldValue: 0 } as {
    portfolio: { name: string; price: string; amount: number }[];
  };

  beforeEach(() => {
    cy.visit('http://localhost:5173/cryptocurrency/');
    cy.get('[data-cy="table-row"]:first-of-type').then((item) => {
      cy.get('[data-cy="table-row"]:first-of-type button').click();
      cy.get('input').type('10');
      cy.contains('Submit').click();
      initData.portfolio.push({
        name: item.children('[data-cy="name"]').text(),
        price: item.children('[data-cy="priceusd"]').text(),
        amount: 10,
      });
    });

    cy.get('[data-cy="table-row"]:last-of-type').then((item) => {
      cy.get('[data-cy="table-row"]:last-of-type button').click();
      cy.get('input').type('15');
      cy.contains('Submit').click();
      initData.portfolio.push({
        name: item.children('[data-cy="name"]').text(),
        price: item.children('[data-cy="priceusd"]').text(),
        amount: 15,
      });
    });

    cy.get('[data-cy="table-row"]:first-of-type').then((item) => {
      cy.get('[data-cy="table-row"]:first-of-type button').click();
      cy.get('input').type('8');
      cy.contains('Submit').click();
      initData.portfolio.push({
        name: item.children('[data-cy="name"]').text(),
        price: item.children('[data-cy="priceusd"]').text(),
        amount: 8,
      });
    });
  });

  it('show the most popular currency work successfully', () => {
    cy.get('[data-cy="popular-currency"]').each((item, index) => {
      cy.get('[data-cy="table-row"]')
        .eq(index)
        .should('contain', item.children('[data-cy="popular-currency-name"]').text());
      cy.get('[data-cy="table-row"]')
        .eq(index)
        .should(
          'contain',
          item.children('[data-cy="popular-currency-price"]').text().replace('$ ', '')
        );
    });
  });

  it('data save when page reload', () => {
    cy.get('[data-cy="user-portfolio"]').click();
    const initData: { name: string; price: string }[] = [];
    cy.get('[data-cy="portfolio-table-row"]').each(($item) => {
      initData.push({
        name: $item.children('[data-cy="portfolio-table-name"]').text(),
        price: $item.children('[data-cy="portfolio-table-price"]').text(),
      });
    });
    cy.reload();
    cy.get('[data-cy="user-portfolio"]').click();
    cy.get('[data-cy="portfolio-table-row"]').each(($item, index) => {
      expect($item.children('[data-cy="portfolio-table-name"]').text()).equal(initData[index].name);
      expect($item.children('[data-cy="portfolio-table-price"]').text()).equal(
        initData[index].price
      );
    });
  });

  it('delete all currency from portfolio work successfully', () => {
    cy.get('[data-cy="user-portfolio"]').click();
    cy.screenshot();
    cy.get('[data-cy="portfolio-table"] button').each(($btn) => $btn.click());
    cy.get('[data-cy="portfolio-row"]').should('not.exist');
    cy.screenshot();
    cy.get('[data-cy="modal-content"]').type('{esc}');
    cy.get('[data-cy="balance"]').contains('0.000');
    cy.get('[data-cy="diff"]').should('not.exist');
    cy.screenshot();
  });

  it('delete not all currency from portfolio work successfully', () => {
    cy.get('[data-cy="user-portfolio"]').click();
    cy.get('[data-cy="portfolio-table-row"]:last-of-type button').should('exist');
    cy.get('[data-cy="portfolio-table-row"]:last-of-type button').click();
    cy.get('[data-cy="portfolio-table-row"]').should('have.length', 1);
    cy.get('[data-cy="modal-content"]').type('{esc}');
    getDataById('bitcoin').then((item) =>
      cy.get('[data-cy="balance"]').contains(`$ ${(18 * +item.priceUsd).toFixed(3)}`)
    );
    cy.get('[data-cy="diff"]').contains('0.000 (0.000%)');
    cy.screenshot();
  });
});
