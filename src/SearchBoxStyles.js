import styled, { css } from 'styled-components';

const SearchBoxStyles = css`
        border-right: none;
        border-left: none;
        border-top: none;
        border-bottom: 2px solid grey;
        font-size: 1.5em;
  width: 96.5%;
  padding-left: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-left: 0.5%;


        :focus-visible {
          outline-offset: unset;
          outline: none;

        }
    `;

export default SearchBoxStyles;