import { DimensionValue, View } from 'react-native';

type Props = {
  width?: DimensionValue;
  height?: DimensionValue;
};

const Spacer = ({ width = '100%', height = 30 }: Props) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
