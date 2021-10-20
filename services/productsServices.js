const faker = require('faker');

class productsServices {

  constructor() {
    this.products = [];
    this.firstGenerate();
  }

  firstGenerate () {
    // const {limit} = request.query;
    // const sizeArray = limit || 10;
    const sizeArray = 10;

    for(let i = 0; i < sizeArray; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }

  create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find () {
    return this.products;
  }
  findOne (id) {
    return this.products.find(item => item.id === id)
  }
  update (id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index == -1){
      throw new Error("Product Not Found");
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
    }
    return this.products[index];
  }
  delete (id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index == -1){
      throw new Error("Product Not Found");
    } else {
      this.products.splice(index, 1);
      return {
        message: `product id: ${id} deleted`
      }
    }
  }
};

module.exports = productsServices;
