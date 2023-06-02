import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participants = ['Luan', 'Luan 2', 'Luan 3', 'Luan 4', 'Luan 5', 'Luan 6', 'Luan 7', 'Luan 8', 'Luan 9', 'Luan 10']

  function handleParticipantAdd() {
    if (participants.includes('Luan')) {
      return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome');
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado')
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
          />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de prensença.
          </Text>
        )}
      />
    </View>
  )
}

