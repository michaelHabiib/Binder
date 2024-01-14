export interface Course {
    id ?: number
    courseName: string;
    author: string;
    actualPrice: string;
    discountPercentage: string;
    priceAfterDiscount: number;
    tags: string[];
  }