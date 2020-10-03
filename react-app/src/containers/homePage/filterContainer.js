import React, {Component, Fragment} from 'react';
import FilterBlockComponent from "../../components/homePage/filterBlockComponent";

class FilterContainer extends Component {
    filterRoot = React.createRef();
    state = {
        isOpen: false,
        isSticky: false
    };

    constructor(props) {
        super(props);
        if (typeof window !== "undefined" && window.innerWidth < 850) {
            window.addEventListener("scroll", this.pageScrolling);
        }
    }

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    };

    pageScrolling = () => {
        let isSticky = window.pageYOffset > 0;
        this.setState({isSticky: isSticky});
    };

    componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", this.pageScrolling);
        }
    }

    render() {
        const {size, category, price, color} = this.props;
        const {isOpen,isSticky} = this.state;
        return (
            <Fragment>
                <div className={`filter-root ${isOpen ? "open" : ""} ${isSticky ? "sticky" : ""}`} ref={this.filterRoot}>
                    <FilterBlockComponent filter={category} filterName="Kategori" productFilterName={"genderKey"}/>
                    <FilterBlockComponent filter={size} filterName="Beden" productFilterName={"sizeKey"}/>
                    <FilterBlockComponent filter={color} filterName="Renk" productFilterName={"colorKey"}/>
                    <FilterBlockComponent filter={price} filterName="Fiyat" productFilterName={"priceKey"}/>
                </div>
                <div className="resp-filter-btn" onClick={this.toggleOpen}>
                    <i className="icon-filter"/>
                </div>
            </Fragment>


        );
    }
}

export default FilterContainer;