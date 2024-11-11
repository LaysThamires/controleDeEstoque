import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';

export default function HomeScreen() {
  const [produto, setProduto] = React.useState(null);
  const [quantidade, setQuantidade] = React.useState(0);  
  return (
    <SafeAreaView>
      <View style={styles.viewinput}>
        <Text style={styles.textstyle}> Produto </Text>
        <TextInput
          style={styles.meutextinput}
          value={produto}
        />
      </View>
      
      <View style={styles.viewinput}>
        <Text style={styles.textstyle}> Quantidade </Text>
        <TextInput
          style={styles.meutextinput}
          value={quantidade.toString()}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.containerbuttons}>
       <View style={styles.buttonview}>
        <Pressable style={styles.buttonstylecadastrar}>
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
}
});