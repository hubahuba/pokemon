import UseCaseProps from '@/definitions/adapters/use-case';
import Pokemon from '@/usecases/pokemon.ts';
import GameAction from '@/usecases/game-action.ts';

const UseCase: UseCaseProps = {
  pokemon: Pokemon,
  gameAction: GameAction,
};

export default UseCase;
