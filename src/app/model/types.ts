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

export type Restaurant={
  name:String;
  ratings:Number;
  Address:String;
  imageUrl:String;
  tags:String;
};