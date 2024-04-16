import {PokemonUseCaseProps} from '@/definitions/usecases/pokemon';
import {GameActionUseCase} from '@/definitions/usecases/game-action';

interface UseCaseProps {
  pokemon: PokemonUseCaseProps;
  gameAction: GameActionUseCase;
}

export default UseCaseProps;
