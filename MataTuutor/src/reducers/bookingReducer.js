import { createSlice } from '@reduxjs/toolkit'
import bookingService from '../services/bookings'

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: [],
  reducers: {
    setBookings(state, action) {
      return action.payload
    },
    appendBooking(state, action) {
      state.push(action.payload)
    },
    removeBooking(state, action) {
      return state.filter(booking => booking.id !== action.payload)
    },
    updateBooking(state, action) {
      return state.map(booking => 
        booking.id === action.payload.id ? action.payload : booking
      )
    },
    clearBookings(state, action) {
      return []
    }
  }
})

export const { setBookings, appendBooking, removeBooking, updateBooking, clearBookings } = bookingSlice.actions

export const initializeBookings = () => {
  return async (dispatch) => {
    const bookings = await bookingService.getAll()
    dispatch(setBookings(bookings))
  }
}

export const createBooking = (bookingData) => {
  return async (dispatch) => {
    try {
      const newBooking = await bookingService.create(bookingData)
      dispatch(appendBooking(newBooking))
      alert("Booked successfully")
      return true
    } catch {
      alert("Booking failed")
      return false
    }
  }
}

export const deleteBooking = (id) => {
  return async (dispatch) => {
    await bookingService.remove(id)
    dispatch(removeBooking(id))
  }
}

export default bookingSlice.reducer