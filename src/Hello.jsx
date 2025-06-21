import "./Hello.css";
export default function Hello({name="สันโดษ",surname="แซ่เจี๊ยก"}) {

    return (
        <> 
            <center>
                <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfdYIbPJJXY-nKhU-ZV3mWMciqM2H7-YLOfcQ4YBFWqRSF3QvBsWp3ltc_VDnr61RZVL4gsJXNr7qBel_jN4O7xGcGJaxNZuiRd0fUMCdwgWFM5PPZsmUkRhsmBC847xh7xNgRLzhob77xqx_-h7B1YU.jpg?r=dfd" width={500}></img>
                <br></br>
                <button>
                    <a href="https://www.padaeng.com/th-th">Click here</a>
                </button>
                <h1>Hello, I'm {name} {surname}</h1>
                <h3>"I bet you 1,000 dollars"</h3>
           
           </center>
           

        </>
    );

}