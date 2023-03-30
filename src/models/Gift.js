

export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag || 'Here is your gift!'
    this.url = data.url
    this.opened = false
  }
}