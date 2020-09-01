import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

	constructor(props) {
		super(props);
	}

	renderDish(dish) {
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

	renderComments(dish) {
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

	render() {

		const dish = this.props.dish;

		if (dish != null) {
			return (
				<div className="container">
					<div className="row my-5">
						<div className="col-12 col-md-5">
							{ this.renderDish(dish) }
						</div>
						<div className="col-12 col-md-5">
							{ this.renderComments(dish) }
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

}

export default DishDetail;