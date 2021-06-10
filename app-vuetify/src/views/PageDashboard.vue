<template>
<v-container>
  <v-col cols="12">
      </v-col>
  <v-row>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
  </v-row>
  <v-spacer></v-spacer>
  <v-col cols="12">
      </v-col>
      <v-btn
      class="ma-2"
      dark
      color="teal lighten-2"
      :ripple="false"
    >ADD NEW COST
    <v-img
    class="shrink ml-1"
    src="../assets/plus.png"
    transition="scale-transition"
    width="20" />
    <!-- <v-icon
    class="shrink ml-2"
    size="20"
    dark>mdi-plus</v-icon> -->
    </v-btn>

  <v-col class="mb-4">
    <h1>This is a Dashboard page</h1>
    </v-col>
  <PaymentList />
  </v-container>
</template>

<script>
import PaymentList from '../components/PaymentList.vue';

export default {
  name: 'PageDashboard',
  components: {
    PaymentList,
  },
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        to: '/',
      },
      {
        text: 'Dashboard',
        disabled: false,
        to: '/dashboard',
      },
      {
        text: 'About',
        disabled: false,
        to: '/about',
      },
      {
        text: '404',
        disabled: true,
        href: '/404',
      },
    ],
  }),
};
</script>
