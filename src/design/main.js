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
 	$q("div#pages").tabs("div#pages div.page", {
		tabs: 'h2.title'
	});
 	$q("div.page").tabs("div.page div.menu", {
		tabs:  'h3.title'
	});
	$q("#pages .title").hover(
		function() { $(this).addClass("hover"); },
		function() { $(this).removeClass("hover"); }
		);
	$q("a.runme").click(function() {
		$file = $(this).attr("href");
		$file = $file.split('/').join('\\');
		var wss = new ActiveXObject("WScript.Shell");
		if (wss) {
			wss.Run('"'+$file+'"', 1, false);
			return false;
		}
	});
});
