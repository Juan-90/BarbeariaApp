import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ManageServices() {
  const [services, setServices] = useState([
    { id: '1', name: 'Corte de Cabelo', price: '25.00' },
    { id: '2', name: 'Barba', price: '15.00' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newService, setNewService] = useState({ name: '', price: '' });
  const [editingService, setEditingService] = useState(null);

  const handleAddService = () => {
    if (!newService.name || !newService.price) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    const id = Date.now().toString();
    setServices([...services, { id, ...newService }]);
    setNewService({ name: '', price: '' });
    setModalVisible(false);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setNewService({ name: service.name, price: service.price });
    setModalVisible(true);
  };

  const handleUpdateService = () => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === editingService.id
          ? { ...service, ...newService }
          : service
      )
    );
    setEditingService(null);
    setNewService({ name: '', price: '' });
    setModalVisible(false);
  };

  const handleRemoveService = (id) => {
    Alert.alert('Confirmar', 'Deseja realmente remover este serviço?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        onPress: () =>
          setServices((prevServices) => prevServices.filter((s) => s.id !== id)),
      },
    ]);
  };

  const renderService = ({ item }) => (
    <View style={styles.serviceItem}>
      <Text style={styles.serviceText}>{item.name}</Text>
      <Text style={styles.servicePrice}>R$ {item.price}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => handleEditService(item)}
          style={styles.actionButton}
        >
          <Icon name="edit" size={18} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRemoveService(item.id)}
          style={styles.actionButton}
        >
          <Icon name="trash" size={18} color="#ff0000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Serviços</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setNewService({ name: '', price: '' });
          setModalVisible(true);
        }}
      >
        <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Adicionar Serviço</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editingService ? 'Editar Serviço' : 'Adicionar Serviço'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do Serviço"
              value={newService.name}
              onChangeText={(text) =>
                setNewService((prev) => ({ ...prev, name: text }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Preço"
              keyboardType="numeric"
              value={newService.price}
              onChangeText={(text) =>
                setNewService((prev) => ({ ...prev, price: text }))
              }
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={editingService ? handleUpdateService : handleAddService}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setEditingService(null);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 16,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 8,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  cancelButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
