<template>
  <PageLayout>
    <h1 class="title">Button 9 Issue #10 </h1>
    <div class="grid-container">
      <NinthButton @click="() => increment(0)"> Button (<span>{{ getButtonCounts[0] }}</span>) </NinthButton>
      <NinthButton @click="() => increment(1)"> Button (<span>{{ getButtonCounts[1] }}</span>) </NinthButton>
      <NinthButton :disabled="true"> Disabled </NinthButton>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import NinthButton from "@/components/ui/buttons/NinthButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    PageLayout,
    NinthButton
  },
  computed: {
    ...mapGetters('NinthButton', [
      'getButtonCounts'
    ])
  },
  methods: {
    ...mapActions('NinthButton', [
      'incrementButtonCount'
    ]),
    increment(index) {
      this.incrementButtonCount(index)
    }
  }
}
</script>

<style>
.title {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
}
</style>
