<template>
  <q-page class="flex flex-center">
    <QAgenda />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import QAgenda from '@/components/QAgenda.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    QAgenda
  }
})
</script>
