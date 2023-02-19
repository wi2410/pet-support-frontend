
export const selectNews = state => state.news.items;
export const selectIsLoading = state => state.news.isLoading;
export const selectError = state => state.news.error;
export const selectNewsSearchString = state => state.news.searchQuery;