# Ayenda mobile app

> The mobile app that **service provider** users use.

## Install dependencies

#### Initially install all dependencies

```bash
yarn install
```

#### Installing new particular dependencies

```bash
npx expo install <dependency>
```

> We use Expo for this although Expo uses yarn under the hood cause it takes care of packages compatibility according to the Expo SDK version in use.

## Run the project

```bash
yarn start
```

## Notes

- Proved Node version for getting this working is 18.14.0
- For developing with Typescript I followed this tutorial in Expo's documentation: https://docs.expo.dev/guides/typescript/
- We're using an UI library called UI Kitten: https://akveo.github.io/react-native-ui-kitten/ and it's based on Eva Design System: https://eva.design/
