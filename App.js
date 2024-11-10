import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchCategories } from './util/api';
import { fetchProducts } from './util/api';
import { useEffect, useState } from 'react';

export default function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const d = await fetchCategories();
        setCategories(d);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const d = await fetchProducts();
        setProducts(d);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Server is running! 🤯🐈</Text>

      <Text style={styles.listHeader}>Categories: </Text>
      {
        categories.map(
          (category) => (
          <Text key={category.id} style={styles.listItem}>&gt; {category.name}</Text>
          )
        )
      }

      <Text style={styles.listHeader}>Products: </Text>
      {
        products.map(
          (product) => (
          <Text key={product.id} style={styles.listItem}>&gt; {product.name}</Text>
          )
        )
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  listHeader: {
    fontSize: 32,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 24,
    fontStyle: 'italic',
  },
});
