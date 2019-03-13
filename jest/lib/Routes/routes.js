Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	//jokes
	this.route('jokes', {
		path: '/jokes',
		template: 'jokes'  
	});

	this.route('login', {
		path: '/',
		template: 'login'  
	});
});