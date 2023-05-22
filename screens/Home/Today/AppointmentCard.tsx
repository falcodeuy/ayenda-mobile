import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Button, Card, Text } from '@ui-kitten/components';

const Footer = (props: ViewProps): React.ReactElement => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Button style={{ marginRight: 'auto' }} status="basic">
      Editar
    </Button>
    <Button style={styles.footerControl} status="danger">
      Descartar
    </Button>
    <Button style={styles.footerControl}>Atender</Button>
  </View>
);
const Header = (props: ViewProps): React.ReactElement => (
  <View {...props}>
    <Text category="h5">Carlos Pepe</Text>
    <Text category="s1" appearance="hint">
      Corte de pelo
    </Text>
  </View>
);

const AppointmentCard = (props: ViewProps): React.ReactElement => (
  <Card style={styles.card} header={Header} footer={Footer}>
    <Text>14:00 - 15:00</Text>
    <Text style={{ marginTop: 10 }} category="h6">
      Comentario
    </Text>
    <Text>Voy a llegar 5 minutos tarde!</Text>
  </Card>
);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    margin: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});

export default AppointmentCard;
