import './App.css'

function App() {

  return (
    <>
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary">LinkShort</h1>
              <p className="lead text-muted">Shorten your links in seconds</p>
            </div>
            
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="originalUrl" className="form-label visually-hidden">Your long URL</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-link-45deg"></i>
                      </span>
                      <input 
                        type="url" 
                        className="form-control form-control-lg border-start-0 bg-light" 
                        id="originalUrl" 
                        placeholder="Paste your long URL here" 
                        required
                        autoComplete="off" /
                      >
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg rounded-3">
                      Shorten
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* <div className="card mt-4 shadow-sm border-0 rounded-4" id="resultsCard">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Your shortened link</h5>
                <div className="input-group mb-3">
                  <input type="text" className="form-control bg-light" id="shortUrl" readOnly value="https://shrtn.kr/a1b2c3" />
                  <button className="btn btn-outline-primary" type="button" id="copyButton">
                    Copy
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted small">Created just now</span>
                  <a href="#" className="btn btn-sm btn-light">Create new</a>
                </div>
              </div>
            </div> */}
            
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 text-center">
              <div className="col">
                <div className="p-3">
                  <i className="bi bi-lightning-charge fs-2 text-primary mb-3"></i>
                  <h5>Fast & Reliable</h5>
                  <p className="text-muted small">Shorten URLs instantly with guaranteed uptime</p>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <i className="bi bi-shield-check fs-2 text-primary mb-3"></i>
                  <h5>Safe & Secure</h5>
                  <p className="text-muted small">Your data is encrypted and never shared</p>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <i className="bi bi-graph-up fs-2 text-primary mb-3"></i>
                  <h5>Click Analytics</h5>
                  <p className="text-muted small">Track performance with detailed statistics</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
