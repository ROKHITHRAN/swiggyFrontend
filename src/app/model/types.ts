export type login = {
  email: string;
  password: string;
};

export type register = {
  email: string;
  password: string;
  phoneNumber: string;
  name: string;
};

export type restaurantCardDetails = {
  restaurantId: number;
  restaurantName: string;
  ratings: number;
  imageUrl: string;
  address: string;
  tags: string;
};

export type OfferCardDetails={
  imageUrl:String;
  Code:String;
  description:String;
};