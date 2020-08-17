export default function({store, redirect}) {
  if (!store.getters.hasToken) {
    redirect('/?message=login')
  }
}
