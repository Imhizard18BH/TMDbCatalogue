# TMDbcatalogue

This is a movie catalogue application that fetches a list of top-rated movies using The Movie Database (TMDb) API. It allows users to search movies, view movie details in a modal, and navigate between movie results using pagination. The UI is designed with **Tailwind CSS** and enhanced with animations and icons for a better user experience.

## Features ✨

- **Movie List** 🎬: Displays a list of top-rated movies.
- **Search Functionality** 🔍: Users can search for movies by title or description. The search supports partial and case-insensitive matching.
- **Movie Details Modal** 🎥: When a movie is clicked, a modal displays detailed information about the movie, including the title, description, release date, and rating.
- **Pagination** ⏩: Navigates between pages of movie results.
- **Smooth Animations** 🌟: Animations are used for smooth transitions when movies appear, and for modal opening and closing.
- **Responsive Design** 📱: The app is fully responsive for different screen sizes.

## Technologies Used ⚙️

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: For smooth animations and transitions.
- **FontAwesome**: For adding icons (like search and close icons).
- **TMDb API**: For fetching movie data.

## Prerequisites 🛠️

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

## Installation ⚡

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-catalogue.git
cd movie-catalogue
```

### 2. Install dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Set up the TMDb API key

To fetch movie data, you need a TMDb API key.

- Go to [TMDb](https://www.themoviedb.org/) and create an account if you don’t have one.
- After logging in, go to [API](https://www.themoviedb.org/settings/api) and generate your API key.

Create a `.env` file in the root of the project and add the following line:

```
REACT_APP_TMDB_API_KEY=your-api-key-here
```

### 4. Run the application

Now, you can run the development server:

```bash
npm start
```

This will start the app at `http://localhost:3000`.

## Usage 🚀

- The home page will display a list of top-rated movies fetched from TMDb.
- Use the search bar 🔍 to search for movies by title or description. The search will match partial words and be case-insensitive.
- Clicking on a movie 🎥 will open a modal showing more details, including the overview, rating, and release date.
- You can navigate through different pages of the movie list using the pagination buttons ⏩.
- To close the modal ❌, click on the "X" icon in the top-right corner.

## Customization 🎨

You can modify the following files to customize the app:

- **`src/pages/Home.jsx`**: The main page component that displays the list of movies.
- **`src/components/SearchBar.jsx`**: The search bar component.
- **`src/components/MovieCard.jsx`**: The movie card component.
- **`src/components/MovieDetailsModal.jsx`**: The modal that displays movie details.
- **`src/index.css`**: The main CSS file, where you can modify styles and animations.

## License 📝

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.


### Conclusion:
This `README.md` now has various **FontAwesome** icons included for sections such as "Features", "Technologies Used", and "Customization", which help visually enhance the document. You can use these icons to make your `README.md` more engaging and user-friendly!