export const USER_EMAIL = 'USER_EMAIL';

export const login = (email) => ({
  type: USER_EMAIL,
  payload: email,
});
