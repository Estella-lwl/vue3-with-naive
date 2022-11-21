<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const showDialog = ref(false);
function openDialog() {
  showDialog.value = true;
}

let num = ref(10);
function test() {
  num.value++;
  console.log("num: ", num);
  return num;
}

function person(person: string) {
  console.log("person: ", person);
  return "Hello, " + person;
}
let user = "Tom";
// console.log(test(user));
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->
  </div>
  <p>
    <n-button type="info" @click="test">NUM: {{ num }}</n-button>
  </p>
  <p>
    <n-button type="info" @click="person(user)">USER: {{ user }} </n-button>
  </p>

  <br />
  <div>
    <n-button @click="openDialog">11</n-button>
  </div>

  <!-- <n-dialog :show="showDialog"></n-dialog> -->
  <n-modal
    v-model:show="showDialog"
    class="custom-card"
    preset="dialog"
    title="弹窗"
    size="huge"
    :border="false"
  ></n-modal>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
