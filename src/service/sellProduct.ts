/**
 * --> A quantidade vendida pode ser de 1 ou mais unidades
 * --> Se estoque ficar negativo uma exception deve ser lançada
 * --> O valor de venda não pode ser maior do que o valor de compra
 */

import { IProduct } from '../model/Product';

// interface ISellProduct {
//   product: IProduct
//   amount: number;
// }

const sellProduct = (product: IProduct, amount: number): IProduct => {
  if (!product.stock)
    throw new Error('Exception: Not found stock')

  product.stock -= amount;
  return product;
};

export default sellProduct;
