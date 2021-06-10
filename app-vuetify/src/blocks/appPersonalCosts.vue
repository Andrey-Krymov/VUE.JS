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
      <v-col cols="12">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'appPersonalCosts',

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
