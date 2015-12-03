var $lightbox = $("<div class='lightbox'></div>");
var $img = $("<img>");
var $caption = $("<p class='caption'></p>");

$lightbox
	.append($img)
	.append($caption);

$('body').append($lightbox);


$('.gallery li').click(function (e) {
	e.preventDefault();

	var src = $(this).children('img').attr("src");
	var cap = $(this).children('img').attr("alt");

	$img.attr('src',src);
	$caption.text(cap);

	$lightbox.show();

	$lightbox.click(function () {
		$lightbox.hide();
	});
});	