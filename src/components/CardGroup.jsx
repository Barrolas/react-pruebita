import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardSingle from './Card';
import Button from './Button';

function GridCards({ 
    cards = [], 
    columns = { xs: 1, md: 2, lg: 3, xl: 4 },
    gapClass = "g-4"
}) {
    // Datos de ejemplo estilo Airbnb si no se proporcionan cards
    const defaultCards = [
        {
            id: 1,
            title: "Casa moderna en el centro",
            location: "Santiago, Chile",
            imageSrc: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
            imageAlt: "Casa moderna Santiago",
            price: 85000,
            priceUnit: "noche",
            rating: 4.9,
            reviewCount: 127,
            superhost: true,
            onCardClick: () => console.log("Ver detalles casa Santiago")
        },
        {
            id: 2,
            title: "Departamento con vista al mar",
            location: "Viña del Mar, Chile",
            imageSrc: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
            imageAlt: "Departamento Viña del Mar",
            price: 120000,
            priceUnit: "noche",
            rating: 4.8,
            reviewCount: 89,
            superhost: false,
            onCardClick: () => console.log("Ver detalles departamento Viña")
        },
        {
            id: 3,
            title: "Cabaña en la montaña",
            location: "Pucón, Chile",
            imageSrc: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
            imageAlt: "Cabaña Pucón",
            price: 95000,
            priceUnit: "noche",
            rating: 4.7,
            reviewCount: 156,
            superhost: true,
            onCardClick: () => console.log("Ver detalles cabaña Pucón")
        },
        {
            id: 4,
            title: "Loft industrial en Lastarria",
            location: "Santiago, Chile",
            imageSrc: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
            imageAlt: "Loft Lastarria",
            price: 75000,
            priceUnit: "noche",
            rating: 4.6,
            reviewCount: 203,
            superhost: false,
            onCardClick: () => console.log("Ver detalles loft Lastarria")
        },
        {
            id: 5,
            title: "Casa de playa en Zapallar",
            location: "Zapallar, Chile",
            imageSrc: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
            imageAlt: "Casa playa Zapallar",
            price: 180000,
            priceUnit: "noche",
            rating: 4.9,
            reviewCount: 67,
            superhost: true,
            onCardClick: () => console.log("Ver detalles casa Zapallar")
        },
        {
            id: 6,
            title: "Estudio en Providencia",
            location: "Providencia, Santiago",
            imageSrc: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1200",
            imageAlt: "Estudio Providencia",
            price: 55000,
            priceUnit: "noche",
            rating: 4.5,
            reviewCount: 312,
            superhost: false,
            onCardClick: () => console.log("Ver detalles estudio Providencia")
        }
    ];

    const cardsToRender = cards.length > 0 ? cards : defaultCards;

    return (
        <div>
            <Row xs={columns.xs} md={columns.md} lg={columns.lg} xl={columns.xl} className={gapClass}>
                {cardsToRender.map((card) => (
                    <Col key={card.id}>
                        <CardSingle 
                            title={card.title}
                            location={card.location}
                            imageSrc={card.imageSrc}
                            imageAlt={card.imageAlt}
                            price={card.price}
                            priceUnit={card.priceUnit}
                            rating={card.rating}
                            reviewCount={card.reviewCount}
                            superhost={card.superhost}
                            onCardClick={card.onCardClick}
                        />
                    </Col>
                ))}
            </Row>
            
        </div>
    );
}

export default GridCards;