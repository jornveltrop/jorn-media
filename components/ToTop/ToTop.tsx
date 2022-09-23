import Link from 'next/link'
import Icon from '../Icon/Icon'
import toTopStyle from './toTop.module.css'
import {useState} from 'react';
import {useEffect} from 'react';

const ToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 200){
                setShowScroll(true)
            } else if (showScroll && window.pageYOffset <= 200){
                setShowScroll(false)
            }
        };

        window.addEventListener('scroll', checkScrollTop)
    })
    
    return (
        <Link href="#top" >
            <a className={`${toTopStyle.toTop} ${(showScroll ? `${toTopStyle.show}` : `${toTopStyle.hidden}`)}`} >
                <Icon icon="arrowUp" />
            </a>
        </Link>
    )
}

export default ToTop


