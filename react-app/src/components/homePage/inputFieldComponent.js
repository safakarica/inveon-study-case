import React, {Component} from 'react';

class InputFieldComponent extends Component {

    render() {
        return (
            <div className="input-block">
                <input type={"text"} placeholder={"Ürün adı giriniz..."}/>
                <i className={"icon-search"}/>
            </div>
        );
    }
}

export default InputFieldComponent;