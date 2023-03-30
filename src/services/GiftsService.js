import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"


class GiftsService {
  async getGifts() {
    const res = await sandboxApi.get('gifts')
    logger.log('getting gifts', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    logger.log(AppState.gifts)
  }

  openGift(giftId) {
    logger.log('open gift', giftId)
    let openedGift = AppState.gifts.find(g => g.id == giftId)
    openedGift.opened = true
  } 

}

export const giftsService = new GiftsService()