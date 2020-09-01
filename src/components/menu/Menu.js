import React from 'react';
import MenuItem from './MenuItem';
import './menu.css'


export default function Menu() {
    const list = ['Разминка','Воробьиные', 'Лесные', 'Певчие', 'Хищные', 'Морские']
    return (
        <div className="list-group d-flex flex-row">
            {list.map((name, i)=>{
                return <MenuItem name={name} key={i} index={i}/>
            })}
        </div>
    )
}