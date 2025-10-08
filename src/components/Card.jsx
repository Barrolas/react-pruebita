import Card from 'react-bootstrap/Card';
import './Card.css';
import Button from './Button';

function CardSingle({ 
    title = "Propiedad Ejemplo",
    location = "Ciudad, País",
    imageSrc = "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
    imageAlt = "Propiedad",
    price = "$120",
    priceUnit = "noche",
    rating = 4.8,
    reviewCount = 124,
    superhost = false,
    cardStyle = { border: 'none', cursor: 'pointer' },
    onCardClick = null
}) {
    const handleCardClick = () => {
        if (onCardClick) {
            onCardClick();
        }
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <Card 
            style={cardStyle} 
            onClick={handleCardClick}
            className="airbnb-card"
        >
            <div className="position-relative">
                <Card.Img 
                    variant="top" 
                    src={imageSrc} 
                    alt={imageAlt}
                    style={{ 
                        height: '250px', 
                        objectFit: 'cover',
                        borderRadius: '12px 12px 0 0'
                    }}
                />
                {superhost && (
                    <div 
                        className="position-absolute top-0 start-0 m-2 px-2 py-1"
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}
                    >
                        Superhost
                    </div>
                )}
                <div 
                    className="position-absolute top-0 end-0 m-2"
                    style={{ cursor: 'pointer' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path 
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill="white"
                            stroke="rgba(0,0,0,0.3)"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>
            </div>
            <Card.Body className="px-3 pb-0">
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <Card.Title 
                        className="mb-0 fw-bold"
                        style={{ 
                            color: '#222',
                            fontSize: '1rem',
                            lineHeight: '1.25'
                        }}
                    >
                        {title}
                    </Card.Title>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <span 
                        style={{ 
                            color: '#717171',
                            fontSize: '0.875rem'
                        }}
                    >
                        {location}
                    </span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="me-1"
                            style={{ color: '#222' }}
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span 
                            style={{ 
                                color: '#222',
                                fontSize: '0.875rem',
                                fontWeight: '500'
                            }}
                        >
                            {rating}
                        </span>
                        <span 
                            className="ms-1"
                            style={{ 
                                color: '#717171',
                                fontSize: '0.875rem'
                            }}
                        >
                            ({reviewCount})
                        </span>
                    </div>
                    
                    <div className="text-end">
                        <span 
                            style={{ 
                                color: '#222',
                                fontSize: '0.875rem',
                                fontWeight: '600'
                            }}
                        >
                            ${formatPrice(price)}
                        </span>
                        <span 
                            className="ms-1"
                            style={{ 
                                color: '#717171',
                                fontSize: '0.875rem'
                            }}
                        >
                            /{priceUnit}
                        </span>
                    </div>
                </div>
                    <Button className='w-100 my-3'>Ver detalles</Button>
            </Card.Body>
        </Card>
    );
}

export default CardSingle;