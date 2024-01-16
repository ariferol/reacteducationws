import React, { useState, useEffect, useLayoutEffect, memo } from "react";
import PropTypes from 'prop-types';

// Functional Component Yapısı
const FunctionalComponent = memo((props) => {
    // useState 1 parametre (initial value) alan bir fonksi,yondur ve geriye state' i e state i değiştirecek olan fonksiyonu döner
    // Reat Hooks - useState: https://tr.reactjs.org/docs/hooks-state.html
    const [counter, setCounter] = useState(0);
    const {title, description} = props;

    // useEffect: componentin render edilmesinden sonra çalışır
    // React Hooks - useEffect: https://tr.reactjs.org/docs/hooks-effect.html
    // dependencies: useEffect içindeki fonksiyonun tekrar çalışması için gerekli olan değişkenler
    useEffect(() => {
        console.log("component render edildi");
    }, [counter]);

    useLayoutEffect(() => {
        console.log("component render edilmeden hemen önce çalışır");
    });

    console.log("component çalıştı");

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={() => setCounter(counter + 1)}>Tıkla {counter}</button>
        </div>
    );
});

FunctionalComponent.propTypes = {
    // PropTypes: componentlere gelen props'ların doğru olup olmadığını kontrol eder
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

FunctionalComponent.defaultProps = {
    // defaultProps: componentlere gelen props'ların default değerlerini belirler
    title: "{Default Title}",
    description: "{Default Description}"
};

export default FunctionalComponent;