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
  restaurantName: string;
  ratings: number;
  imageUrl: string;
  address: string;
  tags: string;
};
