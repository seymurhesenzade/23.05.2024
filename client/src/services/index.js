import { BASE_URL } from "./contact";
import axios from "axios";

export async function getDataAll() {
  try {
    const response = await axios(`${BASE_URL}/products`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataById(id) {
  try {
    const response = await axios(`${BASE_URL}/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}