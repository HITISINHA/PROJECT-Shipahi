import React from 'react'
// import CommonCard from '../../shared/components/CommonCard';
import autobind from 'react-autobind'

export default class HomeView extends React.Component {
 
  constructor(props) {
    super(props);
    this.setState({
      card:{
        header:{
          title:"URL Avatar",
          subTitle:"Subtitle",
          actAsExpander:true,
          showExpandableButton:true
        },
        text:{
          labelPosition:"images/ok-128.jpg",
          label:true,
          expandable:true,
          message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
        }, 
        media:{
          expandable:true
        }
      }
    })
    autobind(this);
  }

  render() {
    return (
      <div>
        Import card
        {/* <CommonCard card={this.state.card}/> */}
      </div>
    );
  }
}