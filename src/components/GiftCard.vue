<template>
  <div @click="openGift(giftProp.id)" class="card elevation-4">
    <img class="card-img" :src="giftProp?.url" :alt="giftProp?.tag" />
    <p class="text-center">{{ giftProp?.tag }}</p>
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from '../utils/Logger.js';

export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup() {

    return {
      async openGift(giftId) {
      try {
        await giftsService.openGift(giftId)
      } catch (error) {
        logger.log(error.message)
      }
    }
    };
  },
};
</script>
<style></style>
