import { createSlice } from '@reduxjs/toolkit'
import teacherService from '../services/teachers'

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: [],
    reducers: {
        setTeachers(state, action) {
            return action.payload
        },
        removeTeacher(state, action) {
            return state.filter(teacher => teacher.id !== teacher.payload)
        },
    }
})

export const { setTeachers, removeTeacher } = teacherSlice.actions

export const initializeTeachers = () => {
    return async (dispatch) => {
        const teachers = await teacherService.getAll()
        dispatch(setTeachers(teachers))
    }
}

export const deleteTeacher = (id) => {
  return async (dispatch) => {
    await teacherService.remove(id)
    dispatch(removeBooking(id))
  }
}

export default teacherSlice.reducer