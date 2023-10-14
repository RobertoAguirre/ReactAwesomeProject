import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Avatar, Button, Card, Text, TextInput } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("logging in with");
  }

  return(
    <PaperProvider>
      <View style={[styles.container,{flexDirection:'row'}]}>
        <Card style={{flex:1}}>

        </Card>
        <Card style={{flex:1}}>
          <Card.Title title="Acceso" subtitle="Bienvenido" left={LeftContent} />
          
          <Card.Content>
{/*             <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text> */}
            <TextInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              style={{marginBottom:10}}
              mode='outlined'  
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              style={{marginBottom:10}}
              mode='outlined'
            />
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={{flex:1}}>
        </Card>
      </View>
    </PaperProvider>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
