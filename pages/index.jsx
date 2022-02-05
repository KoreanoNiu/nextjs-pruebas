const index = () =>
<div>
    <div className='main'>
        <div className='main__gradient'></div>
        <div className='main__container'>
            <div className='container__textWrapper'>
                <h1>
                    Hola <span className='highlight'>Quality Software</span>
                </h1>
            </div>
        </div>
        <div className='main__round'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40"><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#F4F5F6"></path></svg>
        </div>
    </div>
    <div className='uk-section'>
        <div className='uk-container uk-container-large uk-align-center'>
            <div className="uk-child-width-1-3@m uk-grid-medium uk-grid-match" data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Default</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-primary uk-card-body">
                        <h3 className="uk-card-title">Primary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">
                        <h3 className="uk-card-title">Secondary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>
export default index;