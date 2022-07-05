import styled from 'styled-components';

export const PaymentsTableWrap = styled.div`
  min-height: 25rem;

  margin-top: 2rem;

  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    display: block;
    border-radius: 0.2rem;
  }

  .status-container {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.5rem;
    }

    .error-icon {
      fill: var(--accent-red-color);
    }

    .success-icon {
      fill: var(--accent-green-color);
    }

    .processing-icon {
      fill: var(--accent-grey-color);
    }

    .requires-payment-method-icon {
      fill: var(--accent-yellow-color);
    }
  }

  thead {
    display: none;
    border-bottom: 2px solid var(--accent-grey-color);
  }

  tbody,
  tr,
  td {
    display: block;
  }

  tr {
    margin-bottom: 3rem;
    border-bottom: 2px solid var(--accent-grey-color);
  }

  td {
    text-align: center;
    padding: 1rem;
    border-bottom: 0.1rem solid var(--accent-grey-color);
    background-color: var(--main-light-color);
    text-align: center;
    overflow-x: auto;
    height: 100%;

    &:before {
      content: attr(data-label);
      font-weight: 600;
      margin-bottom: 1rem;
      width: 100%;
      display: block;
      text-align: center;
    }
  }

  td:last-child {
    border-bottom: none;
  }

  td:first-child {
    background-color: var(--accent-grey-color);
    border-top: 2px solid var(--accent-grey-color);
  }

  @media (min-width: 500px) {
    td {
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:before {
        content: attr(data-label);
        width: 30%;
        display: inline-block;
        text-align: left;
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 50vh;
    table {
      padding-bottom: 0;
    }
  }

  @media (min-width: 1200px) {
    table {
      display: table;
    }

    thead {
      display: table-header-group;
    }
    th {
      font-size: 1.1rem;
      font-weight: 600;
      padding: 1rem;
      /* border: 0.1rem solid var(--main-dark-color); */
    }

    tr {
      display: table-row;
    }

    tbody {
      display: table-row-group;
    }

    td:first-child {
      background-color: var(--main-light-color);
    }

    td {
      display: table-cell;
      overflow-x: hidden;
      text-align: center;
      border-bottom: none;

      &::before {
        display: none;
      }
    }
  }
`;
