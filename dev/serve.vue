<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { VSimpleTimeagoSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VSimpleTimeagoSample,
  }
});
</script>

<template>
  <div id="app">
    <v-simple-timeago-sample />
  </div>
</template>
