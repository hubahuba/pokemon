import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Popup} from 'react-native-popup-confirm-toast';
import {StackNavigation, RootStackParamList} from '~/routes/routes';
import {DetailViewModelProps} from './Detail';
import services from '@/services.ts';
import {BerryData, QuerySearch} from '@/definitions/usecases/pokemon';
import {useEffect, useState} from 'react';
import {filterMapper, pokemonDataMapper} from '@/utils';
import {useInfiniteQuery, useMutation} from '@tanstack/react-query';
import request from 'graphql-request';
import {pokeAPIQueryDocument} from '@/data/pokemons.ts';

export default function ViewModel(): DetailViewModelProps {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const navigation = useNavigation<StackNavigation>();
  const [showBerry, setShowBerry] = useState(false);
  const [nextId, setNextId] = useState<number>();
  const {data} = route.params;

  // useEffect(() => {
  //   if (nextId !== undefined) {
  //     const query = services.useCase.pokemon.getPokemon(0, 1, nextId, 'DETAIL');
  //     console.log('useEffect', query.data);
  //   }
  // }, [nextId]);

  let berries: BerryData[] | string | undefined =
    services.storage.getItem('berries');
  if (berries && typeof berries === 'string') {
    berries = JSON.parse(berries);
  }

  const iChooseU = () => {
    const newData = services.useCase.gameAction.iChooseYou(data);
    navigation.navigate('Detail', {data: newData});
  };

  const deletePokemon = () => {
    Popup.show({
      // @ts-ignore
      type: 'confirm',
      title: 'Hapus Pokemon!',
      textBody: 'Yakin hapus pokemon ini?',
      buttonText: 'Ya, hapus',
      confirmText: 'Batal',
      icon: require('~/assets/images/pikachu-sad.png'),
      okButtonTextStyle: {
        fontFamily: 'Raleway-Bold',
      },
      okButtonStyle: {
        backgroundColor: '#ff0000',
      },
      confirmButtonTextStyle: {
        fontFamily: 'Raleway-Bold',
      },
      titleTextStyle: {
        fontFamily: 'Raleway-Bold',
      },
      descTextStyle: {
        fontFamily: 'Raleway-Medium',
      },
      callback: () => {
        Popup.hide();
        setTimeout(() => {
          services.useCase.gameAction.deletePokemon(data.ownedId);
          navigation.goBack();
        }, 300);
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };

  const feedPokemon = (ownedId: string, berry: BerryData) => {
    const pokemon = services.useCase.gameAction.feedPokemon(ownedId, berry);
    if (pokemon) {
      navigation.navigate('Detail', {data: pokemon});
    }
  };

  const evolutionPokemon = ({pokemonId}: {pokemonId: number}) => {
    console.log('mutated', pokemonId);
    // const {data} = services.useCase.pokemon.getPokemon(0, 1, pokemonId);
    // setNextId(pokemonId);
    // if (pokemon) {
    //   navigation.navigate('Detail', {data: pokemon});
    // }
    const filter: QuerySearch = filterMapper(0, 1, pokemonId);
    console.log('mutated', pokemonId, filter, request);
    return request(services.config.API_URL, pokeAPIQueryDocument, filter);
    // console.log(resp);
    // const pokemons = pokemonDataMapper(resp);
    // return pokemons[0];
  };

  const mutation = useMutation({
    mutationFn: evolutionPokemon,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return {
    data,
    navigation,
    iChooseU,
    deletePokemon,
    berries,
    showBerry,
    setShowBerry,
    feedPokemon,
    evolutionPokemon: mutation.mutate,
  };
}
