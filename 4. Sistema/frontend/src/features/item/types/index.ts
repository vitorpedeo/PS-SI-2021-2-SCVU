export type NewItemFormFields = {
  title: string;
  price: string;
  description: string;
};

export type FreightFormFields = {
  zip: string;
};

export type FreightFormAPIResponse = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};
