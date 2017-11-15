import WeDeploy from 'wedeploy'

const auth = WeDeploy.auth('auth-eventosfrontendbr.wedeploy.io')

exports.authenticate = (req, res) => {
  let provider = new auth.provider.Github();

  provider.setProviderScope("user:email");

  auth.signInWithRedirect(provider);
}
