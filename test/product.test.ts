// --> A quantidade vendida pode ser de 1 ou mais unidades

import Product from '../src/model/Product';
import sellProduct from '../src/service/sellProduct';

test('should validate stock write-off of the sale of a unit', () => {
  const product = new Product('Celular', 500.0, 900.0, 10);
  sellProduct(product, 1);
  expect(product.stock).toBe(9);
});

test('should accept the sale of more than one unit', () => {
  const product = new Product('Celular', 500.0, 900.0, 10);
  sellProduct(product, 3);
  expect(product.stock).toBe(7);
})