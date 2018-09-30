$(document).ready(function(){
_czc.push(["_trackEvent",'生成贺卡','打开次数']);
if ('addEventListener' in document) {  
    document.addEventListener('DOMContentLoaded', function() {  
        FastClick.attach(document.body);  
    }, false);  
}
var url = 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas';
var title = '祝你圣诞快乐！';
var content = '圣诞视频祝福';
var logo = 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/img/share.png';
var pay_id = pay_id;
var phone = phone;
var wish=[
'如果你今天没有收到我送的圣诞礼物，那一定是因为——你的袜子有个大洞，快补补吧。',
'在这一年一次的圣诞节，请上帝给我勇气和力量吧，我一定要对你说出那3字：快还钱!',
'你是不是正等待着圣诞老人钻烟囱给你送圣诞节礼物啊?别再傻等了，今年他不会来了，因为去年他被你的臭袜子熏昏了!哈哈&圣诞快乐!',
'没有雪花即使不浪漫也可过圣诞,有了祝福即使是寒冬也感到温暖,平安夜我在许愿:愿幸福和您终生相伴!愿您的礼物堆积如山',
'天空飘落的雪花，就象我的心情，思念不断蔓延，从遥远的另一端努力奔向你，不能相伴，情愿化做雪花，将你砸的人仰马翻 。',
'圣诞到了，祝愿您的身体像圣诞老人一样健康，事业像雪橇车一样没有阻力，钞票像圣诞老人包袱里的礼物一样，永远都用不完!',
'永远我都会记得,在我肩上的双手,风起的时候,有多么温热;永远我都会记得,伴我成长的背影,用你的岁月换成我无忧的快乐!祝您圣诞快乐!'
]
var i=Math.floor(Math.random()*6);
$('#word div').html(wish[i]);
var t=encodeURI($('#to').val()),f=encodeURI($('#from').val());
var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger'){
    $('#to').removeAttr('disabled');
    $('#from').removeAttr('disabled');
    $('#share_to').html('生成贺卡');
    $('#share_to').on('click',function(){
      window.location.href='https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i;
    })
    $('#to').on('input',function(){
      t=encodeURI($('#to').val());
    })
    $('#from').on('input',function(){
      f=encodeURI($('#from').val());
    })
}else{
    $('#to').on('input',function(){
  t=encodeURI($('#to').val());
  title=$('#to').val()+',祝你圣诞快乐！';
  wx.onMenuShareAppMessage({//分享给朋友
      title: title, // 分享标题
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      desc: content,
      success: function () {
      },
      cancel: function () {
          // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
  });
})
$('#from').on('input',function(){
  f=encodeURI($('#from').val());
  content='来自'+$('#from').val()+'的视频祝福';
  wx.onMenuShareAppMessage({//分享给朋友
      title: title, // 分享标题
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      desc: content,
      success: function () {
      },
      cancel: function () {
          // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
  });
  wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
      imgUrl: logo, // 分享图标
      success: function () { 
      },
      cancel: function () { 
         // 用户取消分享后执行的回调函数
      }
  });
})
$.ajax({
    url: 'http://testapi.mrpyq.com/weixin/jsapi_sign',
    datatype:'json',
    data:{url: encodeURIComponent(window.location.href),weixin_type:'weixin'},
    success:function(data){
      console.log(data)
      if(data.timestamp){
        wx.config({
            debug: false,
            appId: 'wx288b9734f2663616',
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.signature,
            jsApiList: [
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
            ]
        });
        wx.ready(function (){
            $('#to').removeAttr('disabled');
            $('#from').removeAttr('disabled');
            wx.onMenuShareAppMessage({//分享给朋友
                title: title, // 分享标题
                link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
                imgUrl: logo, // 分享图标
                desc: content,
                success: function () {
                  _czc.push(["_trackEvent",'贺卡','分享']);
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
                imgUrl: logo, // 分享图标
                success: function () { 
                   _czc.push(["_trackEvent",'贺卡','分享']);
                },
                cancel: function () { 
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQQ({
                title: title, // 分享标题
                desc: content, // 分享描述
                link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
                imgUrl: logo, // 分享图标
                success: function () { 
                   _czc.push(["_trackEvent",'贺卡','分享']);
                },
                cancel: function () { 
                   // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareWeibo({
                title: title, // 分享标题
                desc: content, // 分享描述
                link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
                imgUrl: logo, // 分享图标
                success: function () { 
                   _czc.push(["_trackEvent",'贺卡','分享']);
                },
                cancel: function () { 
                   // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQZone({
                title: title, // 分享标题
                desc: content, // 分享描述
                link: 'https://dukebode.github.io/DUKE-BLOG/activity/Merry_Christmas/share.html?to='+t+'&f='+f+'&i='+i, // 分享链接
                imgUrl: logo, // 分享图标
                success: function () { 
                   _czc.push(["_trackEvent",'贺卡','分享']);
                },
                cancel: function () { 
                   // 用户取消分享后执行的回调函数
                }
            });
        })
        wx.error(function(res){
          console.log(res);
        })
      }
    },
  })
}
})

