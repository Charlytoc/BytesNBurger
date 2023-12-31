import Image from "next/image";

export default function OffersCarousel () {
    return <>
            <div className="carousel-component">
                <CarouselItem name="Mega Burger" imgAlt="Mega burger" imgSrc="/products/bytesnburger.jpg" productDetails="Esta es nuestra hamburguesa estrella, hecha a partir de blablabla"/>
            </div>
        </>
}

interface ICarouselItemProps {
    name: string;
    imgSrc: string;
    imgAlt: string;
    productDetails: string
}

function CarouselItem ({name, imgSrc, imgAlt, productDetails}: ICarouselItemProps) {
    return <div className="carousel-item">
            <Image src={imgSrc} alt={imgAlt} width={1000} height={1000} />
            <details>
                <summary>{name}</summary>
                <p>{productDetails}</p>
            </details>
            </div>
}