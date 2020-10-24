import styled from 'styled-components';

import { colors } from '../helpers/variables';

export const UnorderedList = styled.ul`
  padding: 0;

  li {
    border-bottom: 1px solid ${colors.quinary};
    list-style-type: none;
    padding: 8px 0;

    &:first-child {
      border-top: 1px solid ${colors.quinary};
    }
  }
`;
