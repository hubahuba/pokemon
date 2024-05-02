import {useNavigation} from '@react-navigation/native';
import {SplashViewModel} from '~/screens/Splash/Splash';
import {StackNavigation} from '~/routes/routes';
import services from '@/services.ts';

function ViewModel(): SplashViewModel {
  const {useBerries} = services.useCase.pokemon;
  const {data, isFetching, isFetched, error} = useBerries();
  const navigation = useNavigation<StackNavigation>();

  if (isFetched && data?.length) {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeTab'}],
      });
    }, 500);
  }

  return {data, isFetching, isFetched, error};
}

export default ViewModel;
