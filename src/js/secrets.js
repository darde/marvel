import crypto from 'crypto';

export const Secrets = ((crypto) => {

  const pub = {};
  const privKey = '9b52b9e3b98030c67cb1ed6c4fff12a2523d5835';
  const publicKey = '272252d08128144baa3e398af9795bc8';
  const ts = Date.now().toString();
  const hash = crypto.createHash('md5');

  pub.publicKey = publicKey;
  pub.ts = ts;
  pub.hash = hash.update(ts + privKey + publicKey).digest('hex');

  return pub;
})(crypto);
