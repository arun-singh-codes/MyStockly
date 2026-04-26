import {Button} from '@mui/material';

function OpenAccount() {
    return (  
        <div className='open-Acc-container'>
            <h1>Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <div className='button'><Button style={{ textTransform: "none" }}   variant="contained" color="primary" onClick={()=>{ window.location.href = "http://localhost:3000/signup";}}>Sign up for free</Button></div>
        </div>
    );
}

export default OpenAccount;