$(document).ready(function(){
	_czc.push(["_trackEvent",'已分享页面','打开次数']);
	if ('addEventListener' in document) {  
	    document.addEventListener('DOMContentLoaded', function() {  
	        FastClick.attach(document.body);  
	    }, false);  
	} 
	$('#share').on('click',function(){
		_czc.push(["_trackEvent",'贺卡','拆开分享']);
		window.location.href='https://q.yiban.cn/app/index/appid/171357';
		// $('#main').css('display','none')
	})
	var url=decodeURI(window.location.href);
	var wish=[
	'如果你今天没有收到我送的圣诞礼物，那一定是因为——你的袜子有个大洞，快补补吧。',
	'在这一年一次的圣诞节，请上帝给我勇气和力量吧，我一定要对你说出那3字：快还钱!',
	'你是不是正等待着圣诞老人钻烟囱给你送圣诞节礼物啊?别再傻等了，今年他不会来了，因为去年他被你的臭袜子熏昏了!哈哈&圣诞快乐!',
	'没有雪花即使不浪漫也可过圣诞,有了祝福即使是寒冬也感到温暖,平安夜我在许愿:愿幸福和您终生相伴!愿您的礼物堆积如山',
	'天空飘落的雪花，就象我的心情，思念不断蔓延，从遥远的另一端努力奔向你，不能相伴，情愿化做雪花，将你砸的人仰马翻 。',
	'圣诞到了，祝愿您的身体像圣诞老人一样健康，事业像雪橇车一样没有阻力，钞票像圣诞老人包袱里的礼物一样，永远都用不完!',
	'永远我都会记得，在我肩上的双手，风起的时候，有多么温热;永远我都会记得，伴我成长的背影，用你的岁月换成我无忧的快乐!祝您圣诞快乐!'
	];
	var t=url.split('?')[1].split('&')[0].split('=')[1],
	f=url.split('?')[1].split('&')[1].split('=')[1],
	i=url.split('?')[1].split('&')[2].split('=')[1]-0;
	$('#to').html(t);
	$('title').html(t+',祝你圣诞快乐！');
	$('#from').html(f);
	$('#word div').html(wish[i]);
})