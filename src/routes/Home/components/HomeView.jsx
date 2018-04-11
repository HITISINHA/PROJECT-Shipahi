import React from 'react';
import CommonCard from '../../shared/components/CommonCard';
import autobind from 'react-autobind';
import dynamicSplineConfig from '../../../constants/dynamicSplineConfig.jsx';
import HighChartPainter from '../../shared/components/CommonHighChart.jsx';
import {Card} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import * as homeCardProps from '/homeCard.json'

export default class HomeView extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      config: dynamicSplineConfig,
      card:{
        style:{'color':'navy','margin': '30px','padding': '20px'},
        title:{
          text:'Mission',
          style:{'color':'navy'},
          color:''
        },
        text:{
          labelPosition:"images/ok-128.jpg",
          label:true,
          expandable:true,
          style:'align-text=left',
          message:"Our Application, Shipahi is an answer to the question, raised by our society, on its own women. Not only does, Shipahi acknowledge them about their rights and previliges, but it also provides them an option of being ensure about their security while protecting their self respect. It has been reported that, 848 Indian Women Are Harassed, Raped, Killed every Day,as per the last year's statistics. Of course, these are just the reported numbers—the actual cases of violence against women are much higher. To minimize the delta of actual to reported, Shipahi allows women to log an FIR (First Instance Reporting) online.",
        }, 
        media:{
          expandable:true
        },
        button:{
          label1: 'Know More',
          style:{'backgroundColor':'lightsteelblue'}
        }
      }
    }
    autobind(this);
  }

  render() {
    return (
      <div>
        <CommonCard card={this.state.card}/>
        <MuiThemeProvider>
          <Card style={this.state.card.style}>
            <HighChartPainter config={this.state.config} ref='splineDynamicChart' />        
          </Card>  
        </MuiThemeProvider>
      </div>
    );
  }
}