var $q = jQuery.noConflict();
$q(document).ready(function($){
	$width  = 800;
	$height = 650;
	window.resizeTo(
		$width,
		$height
		);
	window.moveTo(
		(screen.width-$width)/2,
		(screen.height-$height)/2
		);
 	$("div#pages").tabs("div#pages div.page", {
		tabs: 'h2.title'
	});
 	$("div.page").tabs("div.page div.menu", {
		tabs:  'h3.title'
	});
	$("#pages .title").hover( function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
	$("#pages .title").click( function() {
		id = $(this).parent().attr('id');
		if (yaCounter42800219) yaCounter42800219.hit('file://autorun.hta#'+id, {title: $(this).text(), referer: 'file://autorun.hta#'+window.location.hash});
		window.location.hash = id;
	});
	$("a.runme").click(function() {
		$file = $(this).attr("href");
		if (yaCounter42800219) yaCounter42800219.extLink($file);
		$file = $file.split('/').join('\\');
		var wss = new ActiveXObject("WScript.Shell");
		if (wss) {
			wss.Run('"'+$file+'"', 1, false);
			return false;
		}
	});
});
