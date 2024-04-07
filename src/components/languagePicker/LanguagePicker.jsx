
import "./LanguagePicker.css"
function LanguagePicker() {
  return (
    <div className="mb-3 " style={{paddingRight:"15px"}}>
         <div className="logo">
                <a href="#"><img src="https://bluebits.dev/wp-content/uploads/2020/06/cropped-logo-1.png" alt=""></img>    </a>
            </div> 
            <div className="lang-menu">
                <div className="selected-lang">
                    English
                </div>
                <ul>
                    <li>
                        <a href="#" className="de">German</a>
                    </li>
                    <li>
                        <a href="" className="en">English</a>
                    </li>
                    <li>
                        <a href="" className="fr">French</a>
                    </li>
                    <li>
                        <a href="" className="ar">Arabic</a>
                    </li>
                </ul>
                
            </div>
    </div>
  )
}

export default LanguagePicker
