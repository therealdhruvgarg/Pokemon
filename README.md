# Pokémon React App

This is a React application that displays a list of Pokémon using data from the [PokéAPI](https://pokeapi.co/). Users can search for Pokémon by name and click on a Pokémon to view more details.

## Live Project

You can view the live project [here](https://pokemon-five-hazel.vercel.app/).

## Features

- Display a list of Pokémon with images.
- Search functionality to filter Pokémon by name.
- Click on a Pokémon to view more details.

## Technologies Used

- React
- React Router
- Bootstrap
- PokéAPI

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/pokemon-react-app.git
   cd pokemon-react-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the application:**

   ```sh
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## Deployment

This project is deployed using [Vercel](https://vercel.com/). To deploy your own instance of this project:

1. **Install Vercel CLI (optional):**

   ```sh
   npm install -g vercel
   ```

2. **Build the project:**

   ```sh
   npm run build
   ```

3. **Deploy using Vercel:**

   ```sh
   vercel
   ```

   Follow the prompts to deploy your application.

## Project Structure

```plaintext
src/
├── components/
│   ├── PokemonList.js
│   ├── PokemonDetail.js
├── services/
│   ├── product-operations.js
│   ├── api-client.js
│   ├── model.js
├── App.js
├── index.js
```

- `components/`: Contains the React components for the Pokémon list and detail pages.
- `services/`: Contains the logic for fetching data from the PokéAPI and managing the Pokémon data.
- `App.js`: The main application component that sets up routing.
- `index.js`: The entry point for the React application.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [PokéAPI](https://pokeapi.co/): The API used to fetch Pokémon data.
- [Bootstrap](https://getbootstrap.com/): For providing the styling framework.

---
