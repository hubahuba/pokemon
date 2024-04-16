import services from '@/services';
import {MyPokemonViewModelProps} from '~/screens/MyPokemon/MyPokemon';
import {PokemonData} from '@/definitions/usecases/pokemon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '~/routes/routes';
import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export default function ViewModel(): MyPokemonViewModelProps {
  const focused = useIsFocused();
  const navigation = useNavigation<StackNavigation>();
  const [myPokemon, setMyPokemon] = useState<PokemonData[]>([]);

  const fetchData = () => {
    const localPokemon = services.useCase.pokemon.getMyPokemon();
    setMyPokemon(localPokemon);
  };

  useEffect(() => {
    if (focused) {
      fetchData();
    }
  }, [focused]);

  const onPressCard = (selected: PokemonData) => {
    if (selected) {
      navigation.navigate('Detail', {data: selected});
    }
  };

  return {
    data: myPokemon,
    onPressCard,
  };
}
