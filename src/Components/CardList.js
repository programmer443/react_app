import React from 'react';
import Card from "./Card";


const CardList = ({ robots }) => {
    return (
        <div>
		{
		 	robots.map((users, index) => {
			return 	(
				<Card 
				key={index} 
				id={robots[index].id} 
				name={robots[index].name} 
				email={robots[index].email}/>
			)
		})
	}
	</div>
    );
}

export default CardList;