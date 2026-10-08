import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [points, setPoints] = useState(0);

  const user = {
    name: "Nethsara",
    email: "hhnethsara@students.nsbm.ac.lk",
  };

  return (
    <View style={styles.container}>
      {/* Avatar with verified badge */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <Image
            source={require("../../assets/images/avatar.png")} // keep the image path you already use
            style={styles.avatar}
          />
          <Ionicons
            name="checkmark"
            size={36}
            color="#00e000"
            style={styles.badge}
          />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={18} color="#000" />
          <Text style={[styles.value, { marginLeft: 8 }]}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={18} color="#000" />
          <Text style={[styles.value, { marginLeft: 8 }]}>{points}</Text>
        </View>
      </View>

      {/* Floating action button: adds 1 point per tap */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setPoints((prev) => prev + 1)}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  avatarWrapper: { alignItems: "center", marginTop: 10 },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3b6b6",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  avatar: { width: 110, height: 110, borderRadius: 55 },
  badge: { position: "absolute", right: 10, bottom: 18 },
  divider: { height: 1, backgroundColor: "#000", marginVertical: 20 },
  field: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  value: { fontSize: 15, color: "#222" },
  row: { flexDirection: "row", alignItems: "center" },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
});
