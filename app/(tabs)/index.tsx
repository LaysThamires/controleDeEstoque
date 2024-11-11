import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, FlatList, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
  
const HomeScreen = ({ navigation }: any) => {
  const [produto, setProduto] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("0"); 
  const [listaDeEstoque, setListaDeEstoque] = React.useState([]); 
  const [itemSelecionado, setItemSelecionado] = React.useState(null); 
  const [idCount, setIdCount] = React.useState(0); 
  const cadastrar = () => {
    let count = idCount
    const obj = {
      produto: produto,
      quantidade: quantidade,
      id: idCount.toString()
    }

    if (produto === "" || quantidade === "") {
      Alert.alert("Precisa inserir produto e quantidade!")
      return
    }
    setListaDeEstoque([...listaDeEstoque,obj]) 
    count = count+1
    setIdCount(count)
  }

  const excluir = () => {
    const novaLista= listaDeEstoque.filter((item)=> item.id !== itemSelecionado.id)
    setListaDeEstoque(novaLista)
    setProduto("")
    setQuantidade("")
    setItemSelecionado(null)
  }

  const editar = () => {
    const novaLista= listaDeEstoque.map((item)=>
      item.id === itemSelecionado.id ? {...item, quantidade:quantidade, produto: produto} : item
    )
    setListaDeEstoque(novaLista)
  }

  const pegaItemSelecionado = (selecionado: any) => {
    const itemSelect= listaDeEstoque.find((item)=> item.id === selecionado.id)
    setItemSelecionado(itemSelect)
    setProduto(itemSelect.produto)
    setQuantidade(itemSelect.quantidade)
  }

  const itemDaLista = ({item}: any) => (
    <Pressable  style={[item.id === itemSelecionado?.id ? styles.itemselecionado : styles.linhalista]}
     onPress={() => pegaItemSelecionado(item)}>
      <Text  style={styles.linhacelula}>
        {item.produto}
      </Text>
      <Text  style={styles.linhacelula}>
        {item.quantidade}
      </Text>
    </Pressable>
  )

  return (
    <SafeAreaView  style={styles.safeareastyle}>
      <View style={styles.viewinput}>
        <Text style={styles.textstyle}> Produto </Text>
        <TextInput
          style={styles.meutextinput}
          value={produto}
          onChangeText={prod => setProduto(prod)}
        />
      </View>
      
      <View style={styles.viewinput}>
        <Text style={styles.textstyle}> Quantidade </Text>
        <TextInput
          style={styles.meutextinput}
          value={quantidade}
          keyboardType="numeric"
          onChangeText={quant => setQuantidade(quant)}
        />
      </View>

      <View style={styles.containerbuttons}>
       <View style={styles.buttonview}>
        <Pressable style={styles.buttonstylecadastrar} onPress={cadastrar}>
          <Text style={styles.buttontextstyle}> Cadastrar </Text>
        </Pressable>
       </View>
       <View style={styles.buttonview}>
         <Pressable style={[styles.buttonstyleeditar, itemSelecionado === null && styles.botaodesabilitado]} 
         onPress={editar} disabled={itemSelecionado === null}>
          <Text style={styles.buttontextstyle}> Editar </Text>
         </Pressable>
       </View>
      </View>

      <View>
      <Pressable style={[styles.buttonstyleexcluir, itemSelecionado === null && styles.botaodesabilitado]}  
      onPress={excluir} disabled={itemSelecionado === null}>
          <Text style={styles.buttontextstyle}> Excluir </Text>
      </Pressable>
      </View>

      <View style={styles.containerlista}>
        <View style={styles.headerlista}>
          <Text style={styles.headerlistatext}>
            Produto
          </Text>
          <Text style={styles.headerlistatext}>
            Quantidade
          </Text>
        </View>

        <FlatList
        data={listaDeEstoque}
        renderItem={itemDaLista}
        keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Controle De Estoque' }} // Definindo o título da página
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  meutextinput: {
	height: 40,
	borderWidth: 1,
  },
viewinput: {
	margin: 12,
},
textstyle: {
  fontSize: 18,
},
safeareastyle: {
  flex: 1,
  paddingHorizontal: 12,
},

buttonstylecadastrar: {
  backgroundColor: 'green',
  marginHorizontal: 12,
  paddingVertical: 12,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  elevation: 3,
},
buttontextstyle: {
  color: "white",
},
buttonstyleeditar: {
  backgroundColor: 'blue',
  marginHorizontal: 12,
  paddingVertical: 12,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  elevation: 3,
},
buttonstyleexcluir: {
  backgroundColor: 'red',
  margin: 12,
  paddingVertical: 12,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  elevation: 3,
},
containerbuttons: {
  display: "flex",
  flexDirection: "row", 
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
},
buttonview: {
  flex: 1,
},
containerlista: {
  flex: 1,
  margin: 12,
},
headerlista: {
  backgroundColor: "green",
  height: 40,
  flexDirection: "row",
},
headerlistatext: {
  flex: 1,
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  paddingVertical: 12,
},
linhalista: {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
  paddingVertical: 12,
},
linhacelula: {
  flex: 1,
  textAlign: "center",
},
itemselecionado: {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
  paddingVertical: 12,
  backgroundColor: "#ccc",
},
botaodesabilitado: {
  backgroundColor: "gray",
}
});