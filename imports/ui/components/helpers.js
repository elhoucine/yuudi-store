Template.registerHelper('showSmallText', function(text,length) {
	if(text != null){
		var maxLength = length;
		if(text.length > maxLength){
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}
});
