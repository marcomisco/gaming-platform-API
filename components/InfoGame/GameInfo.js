import styled from 'styled-components';
import { Item } from './Item';

export function GameInfo({ game }) {
  return (
    <Container>
      <Item
        title={'Platforms'}
        value={game.platforms?.map((item) => item?.platform?.name).join(', ')}
      />

      <Item title={'Rating'} value={game.metacritic} />

    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
