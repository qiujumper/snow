import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		//the default for new user, we can get the data from database later
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
		console.log('hello there');
	}

	addDay(newDay) {
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

	render() {
		return (
			<div className="app">
				<Menu />
			    {/* aa */ }
				{(this.props.location.pathname === "/") ?
				  <SkiDayCount total={this.countDays()}
								 powder={this.countDays(
								 		"powder"
								 	)}
								 backcountry={this.countDays(
								 		"backcountry"
								 	)}/> :
				 (this.props.location.pathname === "/add-day") ?
				 	<AddDayForm onNewDay={this.addDay}/> :
				 	<SkiDayList days={this.state.allSkiDays}
				 				filter={this.props.params.filter}/>				 
				}
					
			</div>
		)
	}
}




