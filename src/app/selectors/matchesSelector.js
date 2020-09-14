import { createSelector } from "@reduxjs/toolkit";

export const getAllMatches = createSelector(
    state => state.matches.matches,
    matches => matches
)

export const getSelectedCompetitionsMatches = createSelector(
    state => state.matches.matches,
    state => state.matches.selectedCompetitions,
    (matches, selectedCompetitions) => {
        return matches.filter(a => selectedCompetitions.includes(a.competition.id));
    }
)

export const getAllCompetitions = createSelector(
    state => state.matches.matches,
    matches => {
        return matches.map(match => match.competition).filter((comp, pos, arr) => {
            return arr.map(comp => comp.id).indexOf(comp.id) === pos;
        });
    }
)