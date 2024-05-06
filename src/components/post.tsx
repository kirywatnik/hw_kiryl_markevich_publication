import { useState } from "react";

import Picture from '../assets/i.webp';

interface LayoutProps  { 
    children: React.ReactNode,
    title: string,
 }

export default function Post(props:LayoutProps){
    let array = [{title:props.title, img: Picture, children:props.children }];
    
    const [isVisible, setVisible] = useState(false);
    const showText = () => {
        setVisible(!isVisible);
    }
    const posts = array.map((item) => {
        return(
        <>
            <p style={{fontWeight:700, fontSize: '26px'}}>{item.title}</p>
                <div><img src={item.img} alt="" /></div>
                {isVisible && <p>{item.children}</p>}
                <button onClick={showText}> {!isVisible && <p>Читать</p>} {isVisible && <p>Закрыть</p>}</button>
        </>
        )
    })
    return(
        <>  
            {posts}
            {/* <a href="#" style={{textDecoration:'none'}}><p style={{fontWeight:700, fontSize: '26px'}}>{props.title}</p></a>
            <div><a href="#"><img src={Picture} alt="" /></a></div>
            {isVisible && <p>{props.children}</p>}
            <button onClick={showText}> {!isVisible && <p>Читать</p>} {isVisible && <p>Закрыть</p>}</button> */}
        </>
    )
}