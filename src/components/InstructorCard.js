import Card from 'react-bootstrap/Card';

function InstructorCard({instructor}) {
    return (
        <a style={{
            textDecoration: "none",
        }} href={`/instructor/${instructor.slug}`}>
            <Card style={{
                border: "none", alignItems: "center", textAlign: "center",
                "&:hover": {
                    backgroundColor: "red",
                }
            }}>
                <Card.Img variant="top" src={instructor.profile_image.url}/>
                <Card.Body>
                    <Card.Title>{instructor.title}</Card.Title>
                    <Card.Text>
                        {instructor.short_bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default InstructorCard;
