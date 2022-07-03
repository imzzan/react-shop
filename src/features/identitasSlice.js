import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const getIdentitas = createAsyncThunk('identitas/getIdentitas', async () => {
    const response = await axios.get('http://localhost:3004/identitas');
    return response.data
});

export const saveIdentitas = createAsyncThunk('identitas/saveIdentitas', async ({nama, number, alamat}) => {
    const response = await axios.post('http://localhost:3004/identitas', {
        nama,
        number,
        alamat
    });
    return response.data
});

export const deleteIdentitas = createAsyncThunk('identitas/deleteIdentitas', async (id) => {
    await axios.delete('http://localhost:3004/identitas/' + id);
    return id
});

export const updateIdentitas = createAsyncThunk('identitas/updateIdentitas', async({nama, number, alamat, id}) => {
    const response = await axios.patch(`http://localhost:3004/identitas/${id}`, {
        nama,
        number,
        alamat,
    });
    return response.data
});

const identitasEntity = createEntityAdapter({
    selector : (identitas) => identitas.id
});

const identitasSlice = createSlice({
    name : "identitas",
    initialState : identitasEntity.getInitialState(),
    extraReducers : {
        [getIdentitas.fulfilled] : (state, action) => {
            identitasEntity.setAll(state, action.payload)
        },
        [saveIdentitas.fulfilled] : (state, action) => {
            identitasEntity.addOne(state, action.payload)
        },
        [deleteIdentitas.fulfilled] : (state, action) => {
            identitasEntity.removeOne(state, action.payload)
        },
        [updateIdentitas.fulfilled] : (state, action) => {
            identitasEntity.updateOne(state, { id : action.payload.id, update : action.update})
        }
    }
});

export const identitasSelector = identitasEntity.getSelectors(state => state.identitas);
export default identitasSlice.reducer;