import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

function Burger(props) {
        let transformedIngredients = Object.keys(props.ingredients)
                    .map(igkey => {
                        return [...Array(props.ingredients[igkey])].map((_,i) => {
                             return <BurgerIngredient key={igkey + i} type={igkey} />;
                        });
                    })
                    .reduce((arr , el) => {
                        return arr.concat(el)
                    },[]);
                if(transformedIngredients.length === 0){
                    transformedIngredients = <p> Please start adding ingredients! </p>
                }

    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" ></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" ></BurgerIngredient>
        </div>
    );
};

export default Burger
