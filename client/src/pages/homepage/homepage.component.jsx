import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer} from './homepage.styles';


export const HomePage =()=>{

   // throw Error;
    return (
        <HomePageContainer>
        <Directory/>
        </HomePageContainer>
    );
} 

export default HomePage;