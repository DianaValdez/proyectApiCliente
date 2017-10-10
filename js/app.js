(function(){
	var app = angular.module('store', []);
	// var gems = [
		
	// 	{
	// 		name: 'Decahedron', 
	// 		price: 9000, 
	// 		picture: 'image_01.png', 
	// 		stock:10, 
	// 		discounts: [10,15,25], 
	// 		description: 'lorem ipsum',
	// 		reviews: [
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 		]
	// 	},
		
	// 	{
	// 		name: 'Decahedron', 
	// 		price: 9000, 
	// 		picture: 'image_01.png', 
	// 		stock:10, 
	// 		discounts: [10,15,25], 
	// 		description: 'lorem ipsum',
	// 		reviews: [
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 		]
	// 	},
		
	// 	{
	// 		name: 'Decahedron', 
	// 		price: 9000, 
	// 		picture: 'image_01.png', 
	// 		stock:10, 
	// 		discounts: [10,15,25], 
	// 		description: 'lorem ipsum',			
	// 		reviews: {
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
	// 			{
	// 				stars: 5, 
	// 				comments: 'lorem ipsum', 
	// 				author: 'diana.rubi.valdez@gmail.com'
	// 			},
			
	// 	}
	// ]

	app.controller('StoreController',['$http', function($http){
		var store = this;
		var url = 'http://localhost:3002/api/ProductGemas/';
		store.p = ({
			name: "",
			category: "",
			img: "",
			price: 0,
			stock: 0,
			discounts: 0,
			reviews: 
				{
					stars:  0,
					comment: "",
					author: ""
				}
			
		});



		

		store.view = true;

		$http.get(url).then(function success(response){
			console.log(response.data.productGemas);
			store.products = response.data.productGemas;
			console.log(store.products);
		});

		store.addProduct = function(product){
			console.log(product);
			$http.post(url, product).
			then(function success(response){
				console.log(response);
			},
			function err(err){
				console.log(err);
			})
			
		}

		store.deleteProduct = function(id){
			console.log(id);
			$http.delete(url + id)
			.then(function success(response){
				console.log(`El producto con el ID ${id} se ha eliminado`);
				document.location.reload();
			}, function err(err){
				console.log(`El producto no se ha eliminado ERR ${err}`);
			})
		}


		store.getUniqueProduct = function(id){
			$http.get(url + id).then(function success(response){
			console.log(response);
			store.product = response.data.productGemas;
		});
		}

		store.updateProduct = function(id,revProduct){

			console.log(revProduct);
			console.log(id);

			$http.put(url+id,revProduct)
			.then(function success(response){
				console.log(response);
			},
			function err(err){console.log(`ho ho algo salio mal error ${err}`);}
			);
		}

	}]);


	
	// app.directive('productPanels',function(){
	// 	return{
	// 		restrict:'E',
	// 		templateUrl:'templates/product-panels.html',
	// 		controller: function(){
	// 				this.tab = 1;

	// 				this.selectTab = function(setTab){
	// 					this.tab = setTab;
	// 				}

	// 				this.isSelected = function(checkTab){
	// 					return this.tab===checkTab;
	// 				}
	// 		},
	// 		controllerAs: 'pa'
	// 	}
	// });

	// app.directive('reviewPanel',function(){
	// 	return{
	// 		restrict:'E',
	// 		templateUrl:'templates/review-panel.html',
	// 		controller: function(){
	// 				this.review = {};
	// 				this.addReview = function(product){
	// 					product.reviews.push(this.review);
	// 					this.review = {};
	// 				}
	// 		},
	// 		controllerAs: 'r'
	// 	}
	// });


	

})();