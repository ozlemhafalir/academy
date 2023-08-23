import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import buttonStyles from "../styles/Button.module.css";

function CategoryCard({category}) {
    return (
        <a style={{
            textDecoration: "none",
        }} href={`/category/${category.slug}`} className={buttonStyles.Link}>
            <Card style={{border: "none", alignItems: "center", textAlign: "center"}}>
                <Card.Img src={category.icon} style={{maxWidth: "150px"}}>
                </Card.Img>
                <Card.Body>
                    <Card.Title>{category.title}</Card.Title>
                    <Card.Text>
                        {category.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default CategoryCard;