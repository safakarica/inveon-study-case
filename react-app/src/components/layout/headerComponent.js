import React, {Component} from 'react';
import InputFieldComponent from "../homePage/inputFieldComponent";
import HeaderRightBlockComponent from "./headerRightBlockComponent";

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header-root">
                <div className="header-container safe-area">
                    <div className="left-block">
                        <div className="img-block">
                            <h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="710.161" height="108.098"
                                     viewBox="0 0 710.161 108.098">
                                    <path
                                        d="M351.66,42.418h60.206V21.893H351.66Zm0,21.893V84.836h76.626v21.893H348.923a19.157,19.157,0,0,1-19.157-19.157V19.157A19.157,19.157,0,0,1,348.923,0h67.048a19.157,19.157,0,0,1,17.788,19.157v26A19.156,19.156,0,0,1,414.6,64.311ZM693.741.192a19.157,19.157,0,0,1,16.42,18.965v87.573H688.268V21.893H633.535v84.836H611.642V0h82.1Zm-613.01,21.7v84.836H58.838V0h80.731a19.157,19.157,0,0,1,19.157,19.157v87.573H136.833V21.893Zm163.1,56.717L273.665,0h21.893l-40.5,106.729H232.615L192.113,0h21.893ZM0,0H21.893V21.893H0ZM0,32.84H21.893v73.89H0Z"
                                        fill="#575b5d"/>
                                    <path
                                        d="M364.157,108.1A19.157,19.157,0,0,1,345,88.941V65.68h21.893V86.2H427.1V65.68h21.893V88.941a19.362,19.362,0,0,1-16.42,19.157Zm2.737-86.2V42.418H345V19.157A19.157,19.157,0,0,1,364.157,0h68.416a19.389,19.389,0,0,1,16.42,19.157V42.418H427.1V21.893Z"
                                        transform="translate(127.072)" fill="#dc2b26"/>
                                </svg>
                            </h1>
                        </div>

                        <nav className="menu-block">
                            <ul>
                                <li>
                                    Anasayfa
                                </li>
                                <li>
                                    Kadın
                                </li>
                                <li>
                                    Erkek
                                </li>
                                <li>
                                    Çocuk
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <HeaderRightBlockComponent/>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;