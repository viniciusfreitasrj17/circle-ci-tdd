export interface IProduct {
  description?: string;
  buyPrice?: number;
  sellPrice?: number;
  stock?: number;
}

export default class Product {
  public description: string;
  public buyPrice: number;
  public sellPrice: number;
  public stock: number;

  constructor(
    description: string,
    buyPrice: number,
    sellPrice: number,
    stock: number
  ) {
    this.description = description;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.stock = stock;
  }
}
