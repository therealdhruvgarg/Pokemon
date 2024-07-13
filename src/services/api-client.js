export default async function doNetworkCall() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
    try {
      const response = await fetch(URL);
      const object = await response.json();
      console.log("Object is ", object);
      return object;
    } catch (err) {
      throw err;
    }
  }
  