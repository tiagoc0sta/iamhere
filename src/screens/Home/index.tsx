import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = [
    'Tiago',
    'Chris',
    'Isabela',
    'Miguel',
    'Raí',
    'Jhon',
    'Paul',
    'Jack',
    'Jorge',
  ];

  function handleParticipantAdd() {
    console.log('voce clicou no botao de adicionar');
  }

  function handleParticipantRemove(name: string) {
    console.log(`voce clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento </Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item} //make sure there is no repeated names
            name={item}
            onRemove={() => handleParticipantRemove('Tiago')}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
          </Text>
        )}
      />
    </View> //
  );
}
