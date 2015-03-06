var App = App || {};

var admin = new App.User({
	user: "Cooper",
	password: "Cooper",
	isAdmin: true
});

var user1 = new App.User({
	user: "User1",
	password: "User1",
	isAdmin: false
});

var user2 = new App.User({
	user: "User2",
	password: "User2",
	isAdmin: false
}); 

var user3 = new App.User({
	user: "User3",
	password: "User3",
	isAdmin: false
});

App.AllUsers = new App.UsersCollection([admin,user1,user2,user3]);

App.PopularComics = new App.ComicsCollection([
	new App.Comic({
  	name: "Batman",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/batman.jpg" ,
	gender: "Fiction"
  }),
	new App.Comic({
  	name: "Spiderman",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/spiderman.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Hulk",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/hulk.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Superman",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/superman.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "X-men",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/xmen.jpg" ,
	gender: "Fiction"
  })  
]);

App.TopSearches = new App.ComicsCollection([	
	new App.Comic({
  	name: "The simpsons",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/simpsons.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Hulk",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/hulk.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Capitan America",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/capitanAmerica.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "X-men",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/xmen.jpg" ,
	gender: "Fiction"
  })  
]);

App.Qualification = new App.ComicsCollection([	
	
	new App.Comic({
  	name: "Superman",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/superman.jpg" ,
	gender: "Fiction"
  }) ,
	new App.Comic({
  	name: "The simpsons",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/simpsons.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Hulk",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/hulk.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Capitan America",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/capitanAmerica.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "X-men",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/xmen.jpg" ,
	gender: "Fiction"
  })  
]);


App.Recomended = new App.ComicsCollection([	
	
	new App.Comic({
  	name: "Superman",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/superman.jpg" ,
	gender: "Fiction"
  }) ,
	new App.Comic({
  	name: "Hulk",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/hulk.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Capitan America",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/capitanAmerica.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "The simpsons",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/simpsons.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "X-men",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/xmen.jpg" ,
	gender: "Fiction"
  })  
]);

App.Available = new App.ComicsCollection([	
	
	new App.Comic({
  	name: "Superman",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/superman.jpg" ,
	gender: "Fiction"
  }) ,
	new App.Comic({
  	name: "Hulk",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/hulk.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Capitan America",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/capitanAmerica.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "The simpsons",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/simpsons.jpg" ,
	gender: "Fiction"
  })  ,
	new App.Comic({
  	name: "Hulk",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/hulk.jpg" ,
	gender: "Fiction"
  })  
	,
	new App.Comic({
  	name: "X-men",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/xmen.jpg" ,
	gender: "Fiction"
  })  
	,
	new App.Comic({
  	name: "The simpsons",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/simpsons.jpg" ,
	gender: "Fiction"
  })  
	,
	new App.Comic({
  	name: "X-men",
	description: "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
	image: "Images/xmen.jpg" ,
	gender: "Fiction"
  })  
]);



App.Videos = new App.ComicsCollection([	
	
	new App.Comic({
  	name: "Superman",
	description: "consequat. Duis aute irure dolor",
	image: "Images/superman.jpg" ,
	gender: "Fiction"
  })]);