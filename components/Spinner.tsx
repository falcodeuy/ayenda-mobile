import { Layout, Modal, Spinner } from '@ui-kitten/components';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FullScreenSpinner = () => {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={true} backdropStyle={styles.backdrop}>
      {/* <View style={{ height: insets.top }}> */}
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.15)" translucent={true} />
      {/* </View> */}
      <Spinner />
    </Modal>
  );
};

const SimpleSpinner = () => (
  <Layout style={styles.loading}>
    <Spinner />
  </Layout>
);

const MySpinner = ({
  visible,
  fullscreen = false,
}: {
  visible: boolean;
  fullscreen?: boolean;
}): React.ReactElement => {
  if (visible) {
    return fullscreen ? <FullScreenSpinner /> : <SimpleSpinner />;
  }

  return null;
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
});

export default MySpinner;
