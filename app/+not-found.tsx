import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      {/* Configura el encabezado de la página */}
      <Stack.Screen options={{ title: "Página No Encontrada" }} />
      <Text style={styles.title}>¡Página no encontrada!</Text>
      <Text style={styles.description}>
        La página que intentas visitar no existe.
      </Text>

      {/* Agrega un enlace para volver a la página principal */}
      <Link href="/" style={styles.link}>
        Volver al inicio
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
});
