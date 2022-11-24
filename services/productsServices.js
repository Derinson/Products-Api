let { products } = require('../utils/mocks/db.js');

module.exports = {
  getProducts: (req, res) => {
  	res.json({products});
  },

  addProduct: (req, res) => {
	var { title } = req.body;
	var { price } = req.body;
	var { image} = req.body;
	var { category  } = req.body;

  	products.push({
  		id: products.length+1,
		  title,
		  price,
		  image,
		  category
  	});

  	res.json({
  		success: true,
  		msg: 'successfully Añadido'
  	});
  },

  updateProduct: (req, res) => {
  	const { id } = req.params;
  	const { title } = req.body;
	  const { price } = req.body;
	  const { image} = req.body;
	  const { category  } = req.body;
  	

  	products.forEach((product, i) => {
  		if(product.id === Number(id)) {
  			product.title = title;
			  product.price = price;
			  product.image = image;
			  product.category = category;
  		}
  	});

  	res.send('Successfully Producto Actulizado ');
  },

  deleteProduct: (req, res) => {
  	var id = req.params.id;

  	

  	products.forEach(function(product, index) {
  		if(product.id === Number(id)) {
  			products.splice(index, 1);
  		}
  	});

  	res.send('successfully Producto eliminado');
  }

}
