import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function BusinessDetails() {
  return (
    <ScrollView style={styles.container}>
      {/* Foto do estabelecimento */}
      <Image
        source={{ uri: 'URL_DA_FOTO_DO_ESTABELECIMENTO' }} // Substitua pela URL da imagem da barbearia
        style={styles.image}
      />

      {/* Informações do estabelecimento */}
      <View style={styles.detailsContainer}>
        <Text style={styles.businessName}>Creation Beauty & Nail Lounge</Text>
        <Text style={styles.businessInfo}>7683 Thornton Avenue, Newark</Text>
        <Text style={styles.businessInfo}>Closed opens on Tuesday at 10:00 AM</Text>

        {/* Avaliação */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>5.0</Text>
          <Text style={styles.ratingText}>(85 reviews)</Text>
        </View>

        {/* Serviços */}
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceName}>Gel Manicure</Text>
            <Text style={styles.servicePrice}>From $40</Text>
            <Text style={styles.serviceDuration}>1 hr - 1 hr, 45 min</Text>
            <Text style={styles.bookButton}>Book</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <Text style={styles.serviceName}>Russian Volume Lashes</Text>
            <Text style={styles.servicePrice}>From $50</Text>
            <Text style={styles.serviceDuration}>1 hr, 30 min</Text>
            <Text style={styles.bookButton}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  businessName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  businessInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  servicesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 16,
    color: '#555',
  },
  serviceDuration: {
    fontSize: 14,
    color: '#888',
  },
  bookButton: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 5,
  },
});
