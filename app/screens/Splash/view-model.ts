import {useNavigation} from '@react-navigation/native';
import {SplashViewModel} from '~/screens/Splash/Splash';
import {StackNavigation} from '~/routes/routes';
import services from '@/services.ts';

function ViewModel(): SplashViewModel {
  const {data, isFetching, isFetched, error} =
    services.useCase.pokemon.getBerries();
  const navigation = useNavigation<StackNavigation>();

  if (isFetched && data?.length) {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeTab'}],
      });
    }, 500);
  }
  console.log(error);

  return {data, isFetching, isFetched};
}

export default ViewModel;
