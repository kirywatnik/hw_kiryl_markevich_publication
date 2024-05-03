import { useState } from "react";

import Picture from '../../public/i.webp';

export default function Post(props:any){
    const [isVisible, setVisible] = useState(false);
    const showText = () => {
        setVisible(!isVisible);
    }
    return(
        <>
            <a href="#" style={{textDecoration:'none'}}><p style={{fontWeight:700, fontSize: '26px'}}>{props.title}</p></a>
            <div><a href="#"><img src={Picture} alt="" /></a></div>
            {isVisible && <p>{props.children}</p>}
            <button onClick={showText}> {!isVisible && <p>Читать</p>} {isVisible && <p>Закрыть</p>}</button>
        </>
    )
}