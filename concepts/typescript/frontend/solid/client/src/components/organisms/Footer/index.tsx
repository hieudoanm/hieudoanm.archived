import Container from '@suid/material/Container';
import { Component } from 'solid-js';

export const Footer: Component = () => {
  return (
    <footer>
      <div class="border-t py-8">
        <Container>
          <p>&copy; 2023 Solid</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
