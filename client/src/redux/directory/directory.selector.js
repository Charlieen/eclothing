import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectedDirectory = createSelector(
    [selectDirectory],
    directory => directory.sections
)