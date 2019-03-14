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

	this.route('signup', {
		path: '/signup',
		template: 'signup'  
	});
	
});