import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
	render(){
		return(
			<div style={{width: '100%', margin: 'auto'}}>
			    <Grid className="landing-grid">
			        <Cell col={6} tablet={8}>
			        	<img
			        		src="https://previews.123rf.com/images/belyay/belyay1803/belyay180300016/97518505-linden-and-ash-wood-texture-a-fragment-of-a-wooden-panel-hardwood-zebra-wood.jpg"
			        		alt="wooden pannel"
			        		className="material-img"
			        	></img>
					        <div className="banner-text">
					        	<h6> Wooden Pannel</h6>

					        <hr>
					        </hr>

					        <p>HTML/CSS | Bootstrap | JavaScript | React etc... </p>
					        </div>

			        </Cell>
			        <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
			        <Cell col={2} phone={4}>2 (4 phone)</Cell>
			    </Grid>
		    </div>
		)
	}
}

export default Landing;