import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMatchesApi } from '../api';

export const getMatchesAsync = createAsyncThunk('matches/getAllMatches', async () => {
    return await getAllMatchesApi().then(response => response.data);
  }
);

export const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    matches: [],
    selectedCompetitions: [],
  },
  reducers: {
    selectCompetition: (state, action) => {
        state.selectedCompetitions.push(parseInt(action.payload));
    },
    unselectCompetition: (state, action) => {
        state.selectedCompetitions = state.selectedCompetitions.filter(item => item !== parseInt(action.payload));
    },
    clearSelection: (state) => {
        state.selectedCompetitions = [];
    },
    selectTop5: (state) => {
        state.selectedCompetitions.push(15, 14, 10, 12, 13);
    }
  },
  extraReducers: {
    [getMatchesAsync.fulfilled]: (state, action) => {
      state.matches = action.payload;
    }
  },
});

export const { selectCompetition, unselectCompetition, toggleCompetition, clearSelection, selectTop5 } = matchesSlice.actions;

export default matchesSlice.reducer;