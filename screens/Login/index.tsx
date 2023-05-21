import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({ navigation }): React.ReactElement => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text category="h1">Login</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default Login


