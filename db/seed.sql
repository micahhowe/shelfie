CREATE TABLE products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name varchar(50) NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL
 );

INSERT INTO products (name, price, image_url)
VALUES ('runningShoes', 29.99, 'http://www.ireknit.com/images/product/zxflux-0617-02_2.jpg'),
      ('dressShoes', 25.99, 'https://anthonysfashion-v1539209467.websitepro-cdn.com/wp-content/uploads/shoes-placeholder-300x300.jpg'),
      ('Moccies', 19.99, 'https://cdn.shopify.com/s/files/1/0329/8469/products/womens-embossed-floral-moccasin-shoes-1.jpg?v=1483026666');