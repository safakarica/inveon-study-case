import React, {Component} from 'react';
import FilterItemComponent from "./filterItemComponent";

class FilterBlockComponent extends Component {
    state = {
        isActive: true
    };

    toggleActive = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    };

    render() {
        const {filter, filterName,productFilterName} = this.props;
        const {isActive} = this.state;

        return (
            <div className={`filter-block ${isActive ? "active" : ""}`}>
                <div className="head-block" onClick={this.toggleActive}>
                    <h3>{filterName}</h3>
                    <i className="icon-up-dir"/>
                </div>
                <ul>
                    {
                        filter && filter.map((filterItem,key) =>
                            <FilterItemComponent {...filterItem} key={key} productFilterName={productFilterName}/>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default FilterBlockComponent;