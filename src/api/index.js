import axios from "axios";

export const getBreedsData = async () => {
  const response = await axios.get(
    "https://dog.ceo/api/breeds/list/all"
  );
  return response.data.message;
};

export const getRandomImage = async (breed) => {
  const response = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  return response.data.message;
};
