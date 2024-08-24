

const SplashScreen = () => {
    return (
        <div className="welcome">
            <span id="splash-overlay" className="splash"></span>
            <span id="welcome" className="z-depth-4"></span>

            <header className="navbar-fixed"> 
                <nav className="row deep-purple darken-3">
                    <div className="col s12">
                        <ul className="right">
                            <li className="right">
                                <a href="" target="_blank" className="fa fa-facebook-square fa-2x waves-effect waves-light">
                                    <span className="icon-text"></span>
                                </a>
                            </li>
                            <li className="right">
                                <a href="" target="_blank" className="fa fa-github-square fa-2x waves-effect waves-light">
                                    <span className="icon-text"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default SplashScreen;

