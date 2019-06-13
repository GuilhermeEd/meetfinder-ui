import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 0;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) { margin-right: 1rem; }
  svg { max-height: 4rem; }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.5rem;
  font-size: 1.5rem;
`;
