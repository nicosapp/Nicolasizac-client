export default function ({ app, redirect, route }) {
  if (!app.$auth.loggedIn) {
    return redirect({
      name: 'auth-signin',
    })
  } else if (!app.$auth.user.is_verified) {
    return redirect({
      name: 'account',
    })
  }
}
