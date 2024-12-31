import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">自訂義</h1>
            <p className="col-md-8 fs-4">自訂義</p>
            <button className="btn btn-primary btn-lg" type="button">
              自訂義。
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>自訂義</h2>
              <p>自訂義</p>
              <button className="btn btn-outline-light" type="button">
                自訂義
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>自訂義</h2>
              <p>自訂義</p>
              <button className="btn btn-outline-secondary" type="button">
                自訂義
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 自訂義
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
