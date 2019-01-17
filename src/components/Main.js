import React from 'react'

const Main = () => (
  <main role="main">

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Welcome to Easy LGTM</h1>
        <p className="lead text-muted">
          Browse the best lgtm memes on the web! Want to make your own? SGTM!
        </p>
        <div className="btn-group">
          <a href="#" className="btn btn-primary my-2">Browse All LGTM Memes</a>
          <a href="#" className="btn btn-secondary my-2">Create your own sick ass meme</a>
        </div>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <img src="./src/images/easy.jpg" width="100%"/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <img src="./src/images/easy.jpg" width="100%"/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <img src="./src/images/easy.jpg" width="100%"/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  </main>
)

export default Main
