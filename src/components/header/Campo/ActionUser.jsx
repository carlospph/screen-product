import React from "react";

import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: Center;
  padding: 3rem 0;

  & li {
    list-style: none;
  }

  & li + li {
    background: brown;
    color: white;
    padding: 5px 1.5rem;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export function ActionUser() {
  return (
    <Container>
      <li>Cadastre-se</li>
      <li>Logar</li>
    </Container>
  );
}
