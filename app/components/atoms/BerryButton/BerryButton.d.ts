import {BerryData} from '@/definitions/usecases/pokemon';

export interface BerryButtonProps {
  item: BerryData;
  ownedId: string;
  onSelectBerry?: (ownedId: string, item: BerryData) => void;
}
