# 🍿 usePopcorn - Movie Search & Watchlist App

A modern React application that allows users to search for movies, view details, and maintain a personal watchlist with ratings.

## 🚀 Features

- **Movie Search**: Search through a vast database of movies
- **Detailed Movie Information**: View comprehensive details about each movie
- **Personal Watchlist**: Keep track of movies you've watched
- **Rating System**: Rate movies and maintain your personal scores
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Local Storage**: Your watchlist persists between sessions

## 🛠️ Built With

- React.js
- Custom Hooks
- OMDB API
- CSS Grid & Flexbox
- LocalStorage API

## 📦 Project Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your OMDB API key:
```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

3. Start the development server:
```bash
npm start
```

## 🎯 How It Works

1. **Search Movies**: Type a movie title in the search bar
2. **View Details**: Click on any movie to see detailed information
3. **Rate Movies**: Use the star rating system to rate movies
4. **Add to Watchlist**: Add movies to your watchlist to track what you've watched
5. **Manage Watchlist**: Remove movies from your watchlist as needed

## 🔑 Key Components

- `MovieList`: Displays search results
- `MovieDetails`: Shows detailed movie information
- `WatchedMoviesList`: Manages the watchlist
- `StarRating`: Handles movie ratings
- `useMovies`: Custom hook for movie data fetching
- `useLocalStorageState`: Custom hook for persistent storage

## 📱 Responsive Design

The app is fully responsive and optimized for:
- Desktop screens
- Tablets
- Mobile devices

## ⚙️ Environment Variables

Required environment variables:
```env
REACT_APP_OMDB_API_KEY=your_api_key
```

You can get an API key from [OMDB API](http://www.omdbapi.com/)

## 🐛 Known Issues

- API rate limiting may affect search performance
- Some movie posters may not load due to OMDB API limitations

---

Made with ❤️ using React