
function createMovieContainer(movie) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
  
    const movieImage = document.createElement('img');
    movieImage.classList.add('movie-images');
    movieImage.src = movie.img;
    movieImage.alt = movie.title;
  
    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');
  
    const title = document.createElement('div');
    title.classList.add('movie-titles');
    title.innerHTML = `<strong>Title:</strong> ${movie.title}`;
  
    const director = document.createElement('div');
    director.classList.add('movie-directors');
    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;
  
  
    movieDetails.appendChild(title);
    movieDetails.appendChild(director);
    movieDetails.appendChild(actors);
  
    movieContainer.appendChild(movieImage);
    movieContainer.appendChild(movieDetails);
  
    return movieContainer;
  }
  
  
  
  
  
  
  const getMovies = async () => {
    const url = "https://aydenwells.github.io/json/team.json"; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch team members data.");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMovies = async () => {
    let movies = await getMovies();
    let moviesContainer = document.getElementById("movies-containers");
  
    movies.forEach((movie) => {
      moviesContainer.append(createMovieContainer(movie));
    });
  };
  
  
  window.onload = () => showMovies();
  
  
