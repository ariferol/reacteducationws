import React from 'react';
import PropTypes from 'prop-types';

// Class Component Yapısı
class ClassComponent extends React.Component {
    // props: componentler arası veri alışverişi için kullanılır ev tek yönlü bir veri akışı sağlar
    constructor(props) {
        super(props);
        console.log(props);
        // state: componentin içindeki verileri tutar ve değişikliklerde componentin yeniden render edilmesini sağlar
        this.state = {counter: 0};
        this.onClick = this.onClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return {counter: state.counter, title: props.title, description: props.description};
    }

    // componentDidMount: componentin render edilmesinden sonra çalışır
    componentDidMount() {  
        console.log("componentDidMount");
        console.log(this.state);
    }

    //componentWillUnmount: component kaldırılırken çalışır
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    // shouldComponentUpdate: componentin render edilip edilmeyeceğini belirler
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state, nextState);
        return true;
    };

    onClick () {
        // this: class içindeki methodlara erişim sağlar
        // setState: state içindeki verileri değiştirmek için kullanılır
        //this.setState({counter: this.state.counter + 1});

        // NOTE: 2. kullanım
        this.setState((state) => {
            return {
                counter: state.counter + 1
            };
        });
    }

    // render: methodu, componentin görüntülenmesini yani render edilmesini sağlar
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <button onClick={this.onClick}>Tıkla {this.state.counter}</button>
            </div>
        );
    }
}

ClassComponent.propTypes = {
    // PropTypes: componentlere gelen props'ların doğru olup olmadığını kontrol eder
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

ClassComponent.defaultProps = {
    // defaultProps: componentlere gelen props'ların default değerlerini belirler
    title: "{Default Title}",
    description: "{Default Description}"
};

export default ClassComponent;