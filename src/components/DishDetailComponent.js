import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


function RenderDish({dish}) {
	return (
		<Card>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardBody>
				<CardTitle>{dish.name}</CardTitle>
				<CardText>{dish.description}</CardText>
			</CardBody>
		</Card>
	);
}

function RenderComments({dish}) {
	const comments = dish.comments.map((comment) => {
		return (
			<div>
				<li className="list-unstyled">{comment.comment} <br/>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
				<br/>
			</div>
		);
	});

	return(
		<Card>
			<CardBody>
				<CardTitle><h4>Comments</h4></CardTitle>
				<CardText>
					{ comments }
				</CardText>
			</CardBody>
		</Card>
	);
}

const DishDetail = ({dish}) => {
	if (dish != null) {
		return (
			<div className="container">
				<div className="row my-5">
					<div className="col-12 col-md-5">
						<RenderDish dish={dish} />
					</div>
					<div className="col-12 col-md-5">
						<RenderComments dish={dish} />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div></div>
		)
	}

}

export default DishDetail;