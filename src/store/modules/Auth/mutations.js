export default {
    logoutAuth(state) {
        state.authUser = {};
        state.authUser.isAuthenticated = false;
        console.log(state.authUser);
    }
}