export const logout = () => {
  console.log('Logging out...');
  localStorage.removeItem('token')
  console.log('Token removed from localStorage');
}