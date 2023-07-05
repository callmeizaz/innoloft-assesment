import axios from 'axios';

export async function fetchProductData(): Promise<any> {
  const url = 'https://api-test.innoloft.com/product/6781/';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}
export async function EditProductData(data: any): Promise<any> {
  const url = 'https://api-test.innoloft.com/product/6781/';

  try {
    const response = await axios.put(url, {
      ...data,
    });
    return response.data;
  } catch (error) {
    console.error('Error editing product data:', error);
    throw error;
  }
}
