Amalia.ProjectView = Ember.View.extend({
	didInsertElement: function(event){
		window.scrollTo(0,0);

		$('.post').fitVids({ maxWidth: 650 });

		if(this.get('controller').get('id') === 'turnup_js') {
			this.$('.turnup').turnup({list: ['Grey Wind', 'Lady', 'Nymeria', 'Summer', 'Shaggy Dog']});
		}
	},
	renderLinks: function(){
		if(this.get('controller').get('url') || this.get('controller').get('github')){
			return true;
		} else{
			return false;
		}
	}.property()
});
