<template>
  <v-container fluid>
    <v-card>
      <user-card />
    </v-card>
    <v-card>
      <TokenCard />
    </v-card>
  </v-container>
</template>
<script>
import UserCard from "@/components/admin/UserCard.vue";
import TokenCard from "@/components/admin/TokenCard.vue";
export default {
  name: "AdminView",

  components: {
    UserCard,
    TokenCard,
  },
};
</script>
