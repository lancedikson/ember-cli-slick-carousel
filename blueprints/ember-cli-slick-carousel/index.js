module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'slick-carousel', target: '1.5.8' }
    ]);
  },

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/slick-carousel/slick/slick.js');
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick.css');
    app.import(app.bowerDirectory + '/slick-carousel/slick/slick-theme.css');
    app.import(app.bowerDirectory + '/slick-carousel/slick/ajax-loader.gif', {
      destDir: 'assets'
    });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.eot', {
      destDir: 'assets/fonts'
    });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.svg', {
      destDir: 'assets/fonts'
    });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.ttf', {
      destDir: 'assets/fonts'
    });
    app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.woff', {
      destDir: 'assets/fonts'
    });

  }
};
