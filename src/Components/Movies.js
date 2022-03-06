import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
    };
  }
  render() {
    let movie = movies.results;
    return (
      <>
        {movie.length == 0 ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h1 className="text-center">
              <strong>Trending</strong>
            </h1>
            <div className="movies-list">
              {movie.map((movieObj) => (
                <div
                  class="card movies-card"
                  onMouseEnter={() => this.setState({ hover: movieObj.id })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    alt={movieObj.title}
                    className="card-img-top banner-img"
                    class="card-img-top"
                    //style={{ height: "100%", width: "20vw"}}
                  />
                  <div class="card-body">
                    <h5 class="card-title movies-title">
                      {movieObj.original_title}
                    </h5>
                    {/* <p class="card-text movies-text">{movieObj.overview}</p> */}
                    <div
                      className="button-wrapper"
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      {this.state.hover == movieObj.id && (
                        <a class="btn btn-primary movies-button">
                          Add to favrouites
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
