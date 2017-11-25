/**
 * 贺卡
 * @auth stuart
 * @link http://www.shizuwu.cn
 * @time 2015.02.05
 */
var Card = {
	fixBox: function() {
		$("img.blank").css({
			"height":$(window).height()
		});
	},

	/**
	 * 初始化滑屏控件
	 * @return {[type]} [description]
	 */
	initSwiper:function() {
		var mySwiper = new Swiper('.swiper-container',{
			loop:true
	    });
	},

	/**
	 * 显示进度
	 * @return {[type]} [description]
	 */
	showLoading: function() {
		$('#shadow').show();
	},

	/**
	 * 隐藏进度
	 * @return {[type]} [description]
	 */
	hideLoading: function() {
		$('#shadow').hide();
	},

	/**
	 * 显示对应的框
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	showBox:function(id){
		$("." + id).siblings().hide();
		$("." + id).show();
	},

	/**
	 * base64转成img
	 * @return {[type]} [description]
	 */
	getImg: function() {
		var dataURL = $("#base64").val();
		if(dataURL) {
			var thumb = new Image();
	        thumb.src = dataURL;
	        return thumb;
		} else {
			return "";
		}
	},

	/**
	 * 给指定框设置指定样式的图片
	 * @param {[type]} id    [description]
	 * @param {[type]} class [description]
	 */
	setImg: function(id, className) {
		var img = this.getImg();
		$(img).addClass(className);
		$("#" + id).find("img").remove();
		$("#" + id).append($(img));
	},

	/**
	 * 上传图片
	 * @return {[type]} [description]
	 */
	postImg: function() {
		if ($("#image_uploader").val() == "") {
			alert("请先选择图片");
		} else {
			this.showLoading();
			this.showCard();
		}
	},

	/**
	 * 复位上传表单
	 * @return {[type]} [description]
	 */
	resetForm: function() {
		$(".fileupload-preview").empty().attr("style","");
		$(".form").get(0).reset();
		this.showBox("upform");
	},

	/**
	 * 查看对应明信片
	 * @return {[type]} [description]
	 */
	showCard: function() {
		// location.href = "index.php?act=card&id=" + id + "&r=" + Math.random();
		var _this = this;
		this.hideLoading();

    	_this.showBox("cardwrapper");
    	_this.initSwiper();
    	$(".cardwrapper").css({
			"height":$("#theme").height()
		});
	},

	/**
	 * 修改卡
	 * @return {[type]} [description]
	 */
	previewCard: function() {
		var _this = this;
		_this.showLoading();

		$('#cardresult').attr("src", "");
		$(".btbt.create").hide();
		$("#createbox").html2canvas({
			onrendered: function(canvas) {
				_this.hideLoading();
				$('#cardresult').attr("src", canvas.toDataURL("image/png"));

				_this.showBox("imgbox");

				$(".imgtitle").html("DIY明信片合成中...");
				$(".imgtitle").show();

				setTimeout(_this.postCard(), 800);
			}
		});

	},

	/**
	 * 提交后台生成图片
	 * @return {[type]} [description]
	 */
	postCard: function() {
		$(".imgbox .postbtn").hide();
		$(".imgbox .returnbtn").hide();
		this.createTip({status:1});
	},

	/**
	 * 提示生成结果
	 * @param  {[type]} response [description]
	 * @return {[type]}          [description]
	 */
	createTip: function(response) {
		$(".imgbox .postbtn").show();
		$(".imgtitle").html("生成成功!");

		setTimeout(function() {
			$(".imgtitle").fadeOut("slow");
			$(".sharetipbox").fadeIn();
		}, 2000);
	},
	
	returnCreate: function() {
		this.showBox("cardwrapper");
	},

	/**
	 * 显示最终结果
	 * @return {[type]} [description]
	 */
	showResult: function(img) {
		this.hideLoading();
		this.showBox("postresult");
	},

	/**
	 * 横屏处理
	 * @return {[type]} [description]
	 */
	orientationHandler: function() {
		var _this = this;
		$(window).on("orientationchange", function() {
			_this.fixBox();
			if (window.orientation == 90 || window.orientation == -90) {
				$(".orientation-tips").show();
			} else if (window.orientation === 0) {
				if (window.innerWidth > window.innerHeight) {
					$(".orientation-tips").show();
				} else {
					$(".orientation-tips").hide();
				}
			} else {
				$(".orientation-tips").hide();
			}
		});
	},

	resizeHandler:function() {
		var _this = this;
		$(window).on("resize", function() {
			_this.fixBox();
		});
	},

	initHandler:function() {
		this.orientationHandler();
		this.resizeHandler();
	}
};

Card.initHandler();
$(".sharebtn").delegate("a", "click", function() {
	$("#shareguide").show();
});
$("#shareguide").delegate("img", "click", function() {
	$("#shareguide").hide();
});