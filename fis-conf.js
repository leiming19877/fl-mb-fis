// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['*.html', 'map.json']);

//configure plugin 
fis.config.set('modules.lint.js', 'jshint');
//configure plugin settings 
fis.config.set('settings.lint.jshint', {
    //ignored some files 
    //ignored : 'static/libs/**.js', 
    ignored : [ 'js/**/*.js' ],
 
    //using Chinese reporter 
    i18n : 'zh-CN',
 
    //jshint options 
    camelcase : true,
    curly : true,
    eqeqeq : true,
    forin : true,
    immed : true,
    latedef : true,
    newcap : true,
    noarg : true,
    noempty : true,
    node : true
});

fis.match('*.js', {
   lint: fis.plugin('jshint', {

    }),
  isMod: true
});

fis.match('/js/seajs/sea-all.min.js', {
  isMod: false
});
fis.match('/js/seajs/sea-all-debug.min.js', {
  isMod: false
});

/*
//通用模块id设置
fis.match(/^\/js.*\/(.*?)([-\.].*)?\.js$/i, {
      id: '$1',
      isMod: true
});
//
fis.match('/js/mui/mui.dtpicker.min.js', {
      id: 'mui-dtpicker',
      isMod: true
});
fis.match('/js/mui/mui.listpicker.min.js', {
      id: 'mui-listpicker',
      isMod: true
});
fis.match('/js/mui/mui.picker.min.js', {
      id: 'mui-picker',
      isMod: true
});
fis.match('/js/mui/mui.poppicker.min.js', {
      id: 'mui-poppicker',
      isMod: true
});
fis.match('/js/mui/mui.previewimage.min.js', {
      id: 'mui-poppicker',
      isMod: true
});
fis.match('/js/mui/mui.view.min.js', {
      id: 'mui-view',
      isMod: true
});
fis.match('/js/mui/mui.zoom.min.js', {
      id: 'mui-zoom',
      isMod: true
});
fis.match('/js/ztree/jquery.ztree.all-3.5.26.min.js', {
      id: 'ztree',
      isMod: true
});*/
fis.hook('cmd', {
  baseUrl: './js/',

  paths: {
              'zepto': 'zepto/zepto.min.js',
              'jquery':'jquery/2.1.1/jquery-2.1.1.min.js',
              'mui':'mui/mui.min.js',
              'mui-dtpicker':'mui/mui.dtpicker.min.js',
              'mui-listpicker':'mui/mui.listpicker.min.js',
              'mui-picker':'mui/mui.picker.min.js',
              'mui-poppicker':'mui/mui.poppicker.min.js',
              'mui-previewimage':'mui/mui.previewimage.min.js',
              'mui-view':'mui/mui.view.min.js',
              'mui-zoom':'mui/mui.zoom.min.js',
              'react':'react/react.min.js',
              'react-dom':'react/react-dom.min.js',
              'vue':'vue/vue-1.0.26.min.js',
              'vue2':'vue/vue-2.0.5.min.js',
              'select2':'select2/select2.min.js',
              'ztree':'ztree/jquery.ztree.all-3.5.26.min.js',
              'dot':'dot/doT.min.js',
              'g2':'g2/g2-1.2.6.min.js',
              'app':'common/app.js',
              'date':'common/date.js',
              'string':'common/string.js',
              'md5':'common/md5.js',
              'base64':'common/base64.js',
              'sha1':'common/sha1.js',
              'index-db':'common/index-db.js',
              'html2canvas':'html2canvas/html2canvas.min.js',
              'image-lazyload':'common/image-lazyload.js',
              'download-img-file':'common/download-img-file.js',
              'upload-file':'common/upload-file.js',
              'fixed-left-header-table':'common/fixed-left-header-table.js'
  }
});

fis.match('::packager', {
  postpackager: fis.plugin('loader')
});


//fis.media('debug')
fis.match('*.js', {
  // 通过 uglify 压缩 js
  // 记得先安装：
  // npm install [-g] fis-optimizer-uglify-js
  optimizer:null,
  useHash: false
})
.match('::packager', {
  postpackager: fis.plugin('loader', {
    allInOne: {
      includeAsyncs: true,
      ignore: ['/js/seajs/sea-all.min.js','/js/seajs/sea-all-debug.min.js']
    }
  })
});

// 注意： fis 中的 sea.js 方案，不支持部分打包。
// 所以不要去配置 packTo 了，运行时会报错的。
fis.media('prod')
  .match('*.js', {
    // 通过 uglify 压缩 js
    // 记得先安装：
    // npm install [-g] fis-optimizer-uglify-js
    optimizer: fis.plugin('uglify-js'),
    useHash: true
  })
  .match('::packager', {
    postpackager: fis.plugin('loader', {
      allInOne: {
        includeAsyncs: true,
        ignore: ['/js/seajs/sea-all.min.js','/js/seajs/sea-all-debug.min.js']
      }
    })
  });

