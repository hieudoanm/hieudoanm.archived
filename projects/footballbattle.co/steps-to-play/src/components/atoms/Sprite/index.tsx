import styled from 'styled-components';

type StyledSpriteProps = { image: string };

export const StyledSprite = styled.div<StyledSpriteProps>`
  background-image: url(${(props: StyledSpriteProps) => props.image});
`;

export default StyledSprite;
