import { useEffect, useState } from "react";
import notFoundImage from '@/assets/images/no-image.png';
import loading from '@/assets/images/pokemon-loading.png';

const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = useState(loading);
    const { src, alt } = props

    useEffect(() => {
        if (src) {

            const image = new Image();
            image.onerror = () => {
                setLoadedSrc(notFoundImage);
            }
            image.onload = () => {
                setLoadedSrc(src);
            }
            image.src = src;
        }
    }, [src]);

    return (
        <img src={loadedSrc} alt={alt} />
    );
};

export default AsyncImage;