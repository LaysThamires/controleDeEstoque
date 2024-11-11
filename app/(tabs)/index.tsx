import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, FlatList, Alert} from 'react-native';

export default function HomeScreen() {
  const [produto, setProduto] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("0"); 
  const [listaDeEstoque, setListaDeEstoque] = React.useState([]); 
  const cadastrar = () => {
    const obj = {
      produto: produto,
      quantidade: quantidade,
      id: listaDeEstoque.length.toString()
    }
    
    if (produto === "" || quantidade === "") {
      Alert.alert("Precisa inserir produto e quantidade!")
      return
    }
    setListaDeEstoque([...listaDeEstoque,obj]) 
  }

  const itemDaLista = ({item}: any) => (
    <View  style={styles.linhalista}>
      <Text  style={styles.linhacelula}>
        {item.produto}
      </Text>
      <Text  style={styles.linhacelula}>
        {item.quantidade}
      </Text>
    </View>
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
         <Pressable style={styles.buttonstyleeditar}>
          <Text style={styles.buttontextstyle}> Editar </Text>
         </Pressable>
       </View>
      </View>

      <View>
      <Pressable style={styles.buttonstyleexcluir}>
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
}
});