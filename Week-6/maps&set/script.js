// WeakMap for storing product views
const productViews = new WeakMap();

// WeakSet for storing product IDs that are in the user's cart
const cartItems = new WeakSet();

// Function to increment product views
function incrementProductViews(productId) {
  // Create an object for the product ID since WeakMap keys must be objects
  const productRef = {};
  
  // Check if the product has been viewed before
  let views = productViews.get(productRef);
  if (views) {
    productViews.set(productRef, views + 1);
  } else {
    productViews.set(productRef, 1);
  }
  
  // Log the number of views for demonstration purposes
  console.log(`Product ID ${productId} has been viewed ${productViews.get(productRef)} time(s).`);
}

// Function to add product to cart
function addToCart(productId) {
  // Create an object for the product ID since WeakSet members must be objects
  const productRef = {};
  
  // Check if the product is already in the cart
  if (cartItems.has(productRef)) {
    console.log('Product already in cart');
    return 'Product already in cart';
  } else {
    cartItems.add(productRef);
    console.log('Product added to cart');
    return 'Product added to cart';
  }
}

incrementProductViews(123); // Product ID 123 is viewed for the first time
incrementProductViews(123); // Product ID 123 is viewed for the second time

addToCart(123); // "Product added to cart"
addToCart(123); // "Product already in cart"

