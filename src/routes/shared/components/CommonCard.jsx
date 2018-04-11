import React from 'react'
// import CommonCard from '../../shared/components/CommonCard';
// import autobind from 'react-autobind'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import autobind from 'react-autobind';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    let cardData=this.props.card
    return (
      <div>
        <br/>
        <MuiThemeProvider>
        <Card style={cardData.style}>
    <CardTitle title={cardData.title.text} titleStyle={cardData.title.style} titleColor={cardData.title.color} subtitle="Card subtitle" />
    <CardText>
    {cardData.text.message}
    </CardText>
    <CardActions>
      <FlatButton label={cardData.button.label1} style={cardData.button.style}/>
    </CardActions>
  </Card>  
  </MuiThemeProvider>
      </div>
    );
  }
}