import { defineStore } from 'pinia'

export const useReservasiStore = defineStore('reservasi', {
  state: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateTime: '',
    guests: '',
    meja: ''
  }),

  actions: {
    setReservasi(data) {
      this.firstName = data.firstName
      this.lastName = data.lastName
      this.email = data.email
      this.phone = data.phone
      this.dateTime = data.date
      this.guests = data.guests
    },

    setMeja(meja) {
      this.meja = meja
    }
  }
})