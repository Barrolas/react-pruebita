import Carousel from 'react-bootstrap/Carousel';

function CarouselPagina({ 
    images = [], 
    showCaptions = false, 
    showTitles = false,
    defaultInterval = 5000 
}) {
    // Si no se proporcionan imágenes, usar imágenes de ejemplo
    const defaultImages = [
        {
            src: 'https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200',
            alt: 'Primera imagen',
            title: 'Título de la primera imagen',
            caption: 'Descripción de la primera imagen'
        },
        {
            src: 'https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200',
            alt: 'Segunda imagen',
            title: 'Título de la segunda imagen',
            caption: 'Descripción de la segunda imagen'
        },
        {
            src: 'https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200',
            alt: 'Tercera imagen',
            title: 'Título de la tercera imagen',
            caption: 'Descripción de la tercera imagen'
        }
    ];

    const carouselImages = images.length > 0 ? images : defaultImages;

    return (
        <Carousel>
            {carouselImages.map((image, index) => (
                <Carousel.Item 
                    key={index} 
                    interval={image.interval || defaultInterval}
                >
                    <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.alt || `Imagen ${index + 1}`}
                        style={{ 
                            height: '400px', 
                            objectFit: 'cover' 
                        }}
                    />
                    {(showCaptions || showTitles) && (
                        <Carousel.Caption>
                            {showTitles && image.title && (
                                <h3>{image.title}</h3>
                            )}
                            {showCaptions && image.caption && (
                                <p>{image.caption}</p>
                            )}
                        </Carousel.Caption>
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselPagina;