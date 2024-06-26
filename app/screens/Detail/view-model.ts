import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Popup} from 'react-native-popup-confirm-toast';
import {StackNavigation, RootStackParamList} from '~/routes/routes';
import {DetailViewModelProps} from './Detail';
import services from '@/services.ts';
import {BerryData} from '@/definitions/usecases/pokemon';
import {useState} from 'react';

export default function ViewModel(): DetailViewModelProps {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const navigation = useNavigation<StackNavigation>();
  const [showBerry, setShowBerry] = useState(false);
  const {data} = route.params;

  const berries = services.useCase.pokemon.useBerries();

  const iChooseU = () => {
    const newData = services.useCase.gameAction.iChooseYou(data);
    navigation.navigate('Detail', {data: newData});
  };

  const callbackCancel = () => {
    Popup.hide();
  };

  const closePokemon = () => {
    navigation.goBack();
  };

  const callbackDelete = () => {
    Popup.hide();
    setTimeout(() => {
      services.useCase.gameAction.deletePokemon(data.ownedId);
      navigation.goBack();
    }, 300);
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
      callback: callbackDelete,
      cancelCallback: callbackCancel,
    });
  };

  const feedPokemon = (ownedId: string, berry: BerryData) => {
    const pokemon = services.useCase.gameAction.feedPokemon(ownedId, berry);
    if (pokemon) {
      navigation.navigate('Detail', {data: pokemon});
    }
  };

  const evolutionPokemon = ({pokemonId}: {pokemonId: string}) => {
    setShowBerry(false);
    const current = services.useCase.gameAction.evolutionPokemon(pokemonId);
    if (current) {
      navigation.navigate('Detail', {data: current});
    }
  };

  return {
    data,
    navigation,
    closePokemon,
    iChooseU,
    deletePokemon,
    berries: berries.data,
    showBerry,
    setShowBerry,
    feedPokemon,
    evolutionPokemon: evolutionPokemon,
  };
}
