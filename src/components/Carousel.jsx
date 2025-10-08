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
            src: 'https://rhmanagement.cl/wp-content/uploads/2019/08/logo-red-rrhh.jpg',
            alt: 'Primera imagen',
            title: 'Título de la primera imagen',
            caption: 'Descripción de la primera imagen'
        },
        {
            src: 'https://rhmanagement.cl/wp-content/uploads/2019/08/logo-red-rrhh.jpg',
            alt: 'Segunda imagen',
            title: 'Título de la segunda imagen',
            caption: 'Descripción de la segunda imagen'
        },
        {
            src: 'https://rhmanagement.cl/wp-content/uploads/2019/08/logo-red-rrhh.jpg',
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