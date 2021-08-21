import React from 'react'
import "./style.css";
import Menu from "./menu.Api";
import MenuCard from "./MenuCard";
import Navbar from './navbar';
const uniqueList=[
    ...new Set(
    Menu.map((curElem)=>{
        return curElem.category;
    })
)];
const Resturant = () => {
    const [menuData,setMenuData]=React.useState(Menu);
    const [menuList,setMenuList]=React.useState(uniqueList);
    const filterItem = (category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        })
        setMenuData(updatedList);
    };
    return (
        <>
           <p className="heading">Resturant Menu</p>
           <Navbar filterItem={filterItem} menuList={menuList}/>
           <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
