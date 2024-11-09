<template>
  <transition
    v-show="visibleModal"
    name="modal"
  >
    <div class="modal modal__mask">
      <div class="modal__wrapper">
        <div class="modal__header header">
          <div class="header__title">
            <slot name="title" />
          </div>
          <div class="header__close" @click="closeModal">X</div>
        </div>
        <slot name="body" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

document.body.classList.add("modal-open")
const visibleModal = ref(true)
const closeModal = () => {
  visibleModal.value = false
  document.body.classList.remove("modal-open")
  setTimeout(() => {
    // emit('close')
  }, 2000)
}
</script>

<style lang="scss" scoped>
  .modal {
    &__mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 1s ease-in;
    }

    &__wrapper {
      background-color: white;
      border-radius: 10px;
      width: 800px;
      height: 500px;
    }

    .header {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>