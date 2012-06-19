
Package.describe({
  summary: "SEO"
});

Package.on_use(function (api) {
  api.use(['mongo-livedata']);
 api.add_files('shared.js', ['server','client']);
  api.add_files('server.js', 'server');
});
