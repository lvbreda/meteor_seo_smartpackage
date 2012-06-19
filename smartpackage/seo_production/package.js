// XXX We should revisit how we factor MongoDB support into (1) the
// server-side node.js driver [which you might use independently of
// livedata, after all], (2) minimongo [ditto], and (3) Collection,
// which is the class that glues the two of them to Livedata, but also
// is generally the "public interface for newbies" to Mongo in the
// Meteor universe. We want to allow the components to be used
// independently, but we don't want to overwhelm the user with
// minutiae.

Package.describe({
  summary: "SEO"
});

Package.on_use(function (api) {
  api.use(['mongo-livedata']);
  api.use('seo_live');

  api.add_files('server.js', 'server');
  api.add_files('client.js', 'client');
});
