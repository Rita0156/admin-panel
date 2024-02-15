import './admintablebar.scss'
const AdminTablebar = () => {
    const handleAlert=()=>{
        alert('Coming Soon')
    }
    return (
        <div className='admintablebar'>
            <div style={{color:'gray'}}>
                Admin / <b style={{color:'black'}}>Tables</b>
            </div>

            <div onClick={handleAlert} className="premiumDemo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
                <span>
                    <b>Premium Demo</b>
                </span>
            </div>


        </div>
    )
}
export default AdminTablebar