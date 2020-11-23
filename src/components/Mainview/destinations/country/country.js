import React from 'react';
import * as s from './country.styles';

const Country = props => {
    const country = props.match.params.country;
    console.log(country);
    const countries = {
        canada:{
            img: '/images/countries/canada.jpg',
            description:'Canada is chilly'
        },
        brazil:{
            img: '/images/countries/brazil.jpg',
            description:'Brazil is Sunny'
        },
        india:{
            img: '/images/countries/india.jpg',
            description:'India is awesome'
        },
        australia:{
            img: '/images/countries/australia.jpg',
            description:'Australia is boring'
        },
        kenya:{
            img: '/images/countries/kenya.jpg',
            description:'Kenya is breathtaking'
        }
    };
    return(
        <s.CountryContainer>
            <s.CountryImage img={countries[country]['img']}/>
            <s.CountryDescription>{countries[country]['description']}</s.CountryDescription>
        </s.CountryContainer>
    );
}

export default Country;