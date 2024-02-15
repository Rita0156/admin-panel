
const DropdownTop = () => {
    return (
        <div class="navbar-dropdown">
            <a href="profile.html" class="navbar-item">
                <span class="icon"><i class="mdi mdi-account"></i></span>
                <span>My Profile</span>
            </a>
            <a class="navbar-item">
                <span class="icon"><i class="mdi mdi-settings"></i></span>
                <span>Settings</span>
            </a>
            <a class="navbar-item">
                <span class="icon"><i class="mdi mdi-email"></i></span>
                <span>Messages</span>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
                <span class="icon"><i class="mdi mdi-logout"></i></span>
                <span>Log Out</span>
            </a>
        </div>
    )
}