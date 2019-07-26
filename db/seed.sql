CREATE TABLE dummy(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(30),
  address VARCHAR(100)
);

INSERT INTO dummy (name, phone, address)
VALUES ('Micah', '888-888-8888', '123 Circle Road'),
      ('Daniel', '333-333-3333', '789 Meat Street'),
      ('Eric', '444-444-4444', '100 N 550 W');