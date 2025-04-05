import { View, Text } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import MyButton from '../../components/button'

function Contador(){
  const [cont, setCont] = useState(0)

  function incrementar(){
    setCont(cont + 1)
  }

  function decrementar(){
    if (cont > 0)
      setCont(cont - 1)
  }

  function zerar(){
    setCont(0)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Text style={styles.contador}>{cont}</Text>
      <MyButton title="Incrementar" onPress={incrementar} color="blue" />
      <MyButton title="Decrementar" onPress={decrementar} color="red" />
      <MyButton title="Zerar/Reset" onPress={zerar} color='black' />

    </View>
  )
}

export default Contador