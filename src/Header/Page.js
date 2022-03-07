import React from 'react'
import { useParams } from 'react-router-dom';
const Page = () => {
    const { slug } = useParams();
    console.log(1111111111)
    return (
        <h1>This is Page for {slug.replace("menu-","Menu ").replace(/-/g,".")}</h1>
    );
}
export default Page;