<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-8">
        <div class="row p-3">
          <!-- SECTION gift cards -->
          <div class="col-4 p-2" v-for="g in gifts" :key="g.id">
              <GiftCard :giftProp="g"/>
            </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>

import { onMounted, computed } from "vue";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import { AppState } from '../AppState.js';
import GiftCard from "../components/GiftCard.vue";


export default {
    setup() {
        async function getGifts() {
            try {
                logger.log("getting gifts on home page");
                await giftsService.getGifts();
            }
            catch (error) {
                logger.log(error.message);
            }
        }
        onMounted(() => {
            getGifts();
        });
        return {
            gifts: computed(() => AppState.gifts),
        };
    },
    components: { GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  // .home-card {
  //   width: 50vw;

  //   >img {
  //     height: 200px;
  //     max-width: 200px;
  //     width: 100%;
  //     object-fit: contain;
  //     object-position: center;
  //   }
  // }

  .card-img {
  min-height: 35vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
// .card-height {
//   height: 37vh;
// }
}
</style>
