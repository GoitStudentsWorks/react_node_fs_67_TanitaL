export const authSelector = state => state.auth.token;
export const userSelector = state => state.auth.user;
export const errorSelector = state => state.auth.error;
export const favoritesSelector = state => state.auth.user?.favorites;