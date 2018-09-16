/**
 * 涓荤珯閰嶇疆
 */
var imgBasePath = imgBasePath || '/public/images/',
    jsBasePath = jsBasePath || '/public/js/',
    jsVersion = jsVersion || 0;

seajs.config({
    base: jsBasePath,

    paths: {
        '{base-modules}': '/spm_modules',
        '{base-um}': '/spm_modules/um-ui/1.0'
    },

    alias: {
        'yiban': 'yiban.js',
        'publish': 'publish/publish.js',
        'jquery': 'jquery/jquery/1.11.1/jquery.js',
        'lazy': 'jquery/jquery-lazy/1.9.7/jquery.lazyload-min.js',
        'css': 'seajs/seajs-css/1.0.4/seajs-css.js',
        'text': 'seajs/seajs-text/1.1.1/seajs-text.js',
        'arale-base': 'arale/base/1.2.0/base.js',
        'arale-class': 'arale/class/1.2.0/class.js',
        'arale-events': 'arale/events/1.2.0/events.js',
        'arale-widget': 'arale/widget/1.2.0/widget.js',
        'position': 'arale/position/1.1.0/position.js',
        'arale-templatable': 'arale/templatable/0.10.0/templatable.js',
        'upload': 'arale/upload/1.2.0/upload.js',
        'upload130': 'album/web/upload/1.3.0/upload.js',
        'calendar': 'arale/calendar/1.1.0/calendar.js',
        'arale-overlay': 'arale/overlay/1.2.0/overlay.js',
        'popup': 'arale/popup/1.2.0/popup.js',
        'es5-safe': 'gallery/es5-safe/0.9.2/es5-safe.js',
        'json': 'gallery/json/3.3.2/json.js',
        'placeholders': 'gallery/placeholders/3.0.2/placeholders.js',
        'handlebars': 'gallery/handlebars/2.0.0/handlebars.js',
        'moment': 'gallery/moment/2.8.1/moment.js',
        'selection': 'gallery/selection/0.10.0/selection.js',
        'UE': 'vendor/ueditor/1.4.2/ueditor.js',
        'juicer': 'vendor/juicer/0.6.5/juicer.js',
        'unslider': 'vendor/unslider/0.0.0/unslider.js',
        'search': 'vendor/search.js',
        'school': 'vendor/school/school.js',
        'face': 'vendor/face.js',
        'comment': 'vendor/comment.js',
        'gallery': 'vendor/gallery/gallery.js',
        'guide': 'vendor/guide/2015/guide.js',
        // password base64
        'base64': 'vendor/base64/base64.min.js',
        // password rsa
        'jsencrypt': 'vendor/rsa/jsencrypt.min.js',
        // forum
        'forum': 'forum/web/index/forum.js',
        'page': 'forum/web/page',
        // vote
        'vote-index': 'vote/web/index.js',
        'vote-content': 'vote/web/content.js',
        'vote-list': 'vote/web/list.js',
        'blogGallery': 'vote/web/album.js',
        'pop': 'UI/pop.js',
        'uploader': 'util/uploader.js',
        // album
        'album': 'album/web/index.js',
        'pages': 'UI/pages/page.js',
        'template': 'album/web/template.js',
        'create': 'album/web/create.js',
        'albumGallery': 'album/web/galleryPlugin.js',
        // disk
        'diskgroup': 'disk/group.js',
        'disknewgroup': 'newgroup/disk.js',
        'operate': 'disk/operate.js',
        'diskupload': 'disk/group_upload.js',
        //province
        'voteslider': 'newgroup/voteslider.js',

        //妗嗘灦
        'umBase': '{base-um}/scripts/base',
        'umClass': '{base-um}/scripts/class',
        'umSwitch': '{base-um}/scripts/switch/switch'
    },
    map: [
        [/^(.*\.(?:css|js|tpl))(.*)$/i, '$1?v=' + jsVersion]
    ],
    preload: [
        Function.prototype.bind ? '' : 'es5-safe',
        this.JSON ? '' : 'json',
        'css',
        'text'
    ]
});