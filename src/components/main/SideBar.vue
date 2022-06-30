<template>
  <v-navigation-drawer app v-model="drawer" absolute temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          사용자ID: {{ userContainer.userId }}
        </v-list-item-title>
        <v-list-item-subtitle>
          사용자이름: {{ userContainer.userName }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          사용자소속: {{ userContainer.userBelong3 }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { bus } from "@/event-bus";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
    drawer: false,
  }),
  created() {
    bus.$on("DRAWER_CLICK", (drawer) => {
      this.drawer = !drawer;
    });
  },
  computed: {
    ...mapGetters("auth", { userContainer: "getUserContainer" }),
  },
};
</script>
