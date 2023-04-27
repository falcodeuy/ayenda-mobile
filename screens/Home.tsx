import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card, Button } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

type Article = {
  title: string,
  subtitle: string,
  description: string,
  image: any,
  cta: string,
};

const article: Article = {
  title: 'Corte de pelo',
  subtitle: 'Juan Pérez',
  description: '16:00 - 17:00',
  image: require('../assets/imgs/bg40.jpg'),
  cta: 'Ver más',
};

const Home: React.FC = () => {
  const renderArticles = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        <Block flex>
          <Card item={article} horizontal />
        </Block>
      </ScrollView>
    );
  };

  return (
    <Block flex center style={styles.home}>
      {renderArticles()}
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular',
  },
});

export default Home;
