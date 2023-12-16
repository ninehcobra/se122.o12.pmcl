const Banner = ({ label }) => {

    return (
        <div style={{ width: '100%', height: '60px', backgroundColor: '#FCF098', padding: '0 20px', display: 'flex', alignItems: 'center', color: 'black' }}>
            <div>
                <img style={{ width: '40px', height: '40px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/warning.png"></img>
            </div>
            <div style={{ marginLeft: '20px', fontWeight: '500' }}>

                {label}
            </div>
        </div>
    )
}

export default Banner