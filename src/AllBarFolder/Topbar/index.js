import { Link } from "react-router-dom"
import './topbar.scss'
const TopBarMenu = () => {
    return (
        <div className="topbar">
            <div className="input-container">
                <input type="text" placeholder="Search everywhere..." />
            </div>
            <div className="otherTopbar">
                <div className="top-icons">
                    <a class="navbar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <span>Sample Menu</span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </span>
                    </a>



                </div>
                <div className="top-icons shadow">
                    <a class="navbar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <span>John Doe</span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="top-icons">
                    <div className="shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                        </svg>
                    </div>
                    <div className="shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </div>
                    <div className="shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                    </div>
                </div>

                {/* <div className=".navbar-menu">
                    <div className="navbar-item dropdown has-divider">
                        <Link className="navbar-link">
                            <span className="icon"><i className="mdi mdi-menu"></i></span>
                            <span>Sample Menu</span>
                            <span className="icon">
                                <i className="mdi mdi-chevron-down"></i>
                            </span>
                        </Link>
                        <div className="navbar-dropdown">
                            <Link  className="navbar-item">
                                <span className="icon"><i className="mdi mdi-account"></i></span>
                                <span>My Profile</span>
                            </Link>
                            <Link className="navbar-item">
                                <span className="icon"><i className="mdi mdi-settings"></i></span>
                                <span>Settings</span>
                            </Link>
                            <Link className="navbar-item">
                                <span className="icon"><i className="mdi mdi-email"></i></span>
                                <span>Messages</span>
                            </Link>
                            <hr className="navbar-divider" />
                            <Link className="navbar-item">
                                <span className="icon"><i className="mdi mdi-logout"></i></span>
                                <span>Log Out</span>
                            </Link>
                        </div>
                    </div> */}
                {/* <div className="navbar-item dropdown has-divider has-user-avatar">
                        <a className="navbar-link">
                            <div className="user-avatar">
                                <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full" />
                            </div>
                            <div className="is-user-name"><span>John Doe</span></div>
                            <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                        </a>
                        <div className="navbar-dropdown">
                            <a href="profile.html" className="navbar-item">
                                <span className="icon"><i className="mdi mdi-account"></i></span>
                                <span>My Profile</span>
                            </a>
                            <a className="navbar-item">
                                <span className="icon"><i className="mdi mdi-settings"></i></span>
                                <span>Settings</span>
                            </a>
                            <a className="navbar-item">
                                <span className="icon"><i className="mdi mdi-email"></i></span>
                                <span>Messages</span>
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                <span className="icon"><i className="mdi mdi-logout"></i></span>
                                <span>Log Out</span>
                            </a>
                        </div>
                    </div>
                    <a href="https://justboil.me/tailwind-admin-templates" className="navbar-item has-divider desktop-icon-only">
                        <span className="icon"><i className="mdi mdi-help-circle-outline"></i></span>
                        <span>About</span>
                    </a>
                    <a href="https://github.com/justboil/admin-one-tailwind" className="navbar-item has-divider desktop-icon-only">
                        <span className="icon"><i className="mdi mdi-github-circle"></i></span>
                        <span>GitHub</span>
                    </a>
                    <a title="Log out" className="navbar-item desktop-icon-only">
                        <span className="icon"><i className="mdi mdi-logout"></i></span>
                        <span>Log out</span>
                    </a>
                </div> */}

            </div>
        </div>
    )
}

export default TopBarMenu