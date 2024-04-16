import {useState} from 'react';
import {HomeViewModelProps} from './Home';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '~/routes/routes';
import services from '@/services.ts';
import {PokemonData} from '@/definitions/usecases/pokemon';

const ViewModel = (): HomeViewModelProps => {
  const navigation = useNavigation<StackNavigation>();
  const [search, setSearch] = useState('');
  const {data, fetchNextPage, isFetched} = services.useCase.pokemon.getPokemon(
    0,
    20,
    search,
  );

  const onPressCard = (selected: PokemonData) => {
    if (data) {
      const selectedPokemon = data.find(pokemon => pokemon.id === selected.id);
      navigation.navigate('Detail', {data: selectedPokemon});
    }
  };

  return {
    data,
    isFetched,
    fetchPokemon: () => fetchNextPage(),
    onChangeSearch: setSearch,
    onPressCard,
  };
};

export default ViewModel;
