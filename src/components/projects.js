import React, {Component} from 'react';
import { Tabs, Tab , Grid, Cell , Card , CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {activeTab: 0};
    }
    toggelCategories(){
     var tab_state = this.state.activeTab;
     if(tab_state === 0){
        return(
        <div className = "project-grid">
            {/* project1 */}
           <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn.jootc.com/wp-content/uploads/2020/03/react-logo-gray.png) center / cover'}}>
                   React project #1
               </CardTitle>
               <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               </CardText>
               <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live_Demo</Button>
               </CardActions>
               <CardMenu style ={{color : '#ff'}}>
                   <IconButton name = "share" style = {{color : '#fff'}}/>
               </CardMenu>
           </Card>
           {/* project2 */}
           <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn.jootc.com/wp-content/uploads/2020/03/react-logo-gray.png) center / cover'}}>
                   React project #2
               </CardTitle>
               <CardText>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               </CardText>
               <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live_Demo</Button>
               </CardActions>
               <CardMenu style ={{color : '#ff'}}>
                   <IconButton name = "share" style = {{color : '#fff'}}/>
               </CardMenu>
           </Card>
           {/* project3 */}
           <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn.jootc.com/wp-content/uploads/2020/03/react-logo-gray.png) center / cover'}}>
                   React project #3
               </CardTitle>
               <CardText>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               </CardText>
               <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live_Demo</Button>
               </CardActions>
               <CardMenu style ={{color : '#ff'}}>
                   <IconButton name = "share" style = {{color : '#fff'}}/>
               </CardMenu>
           </Card>
        </div>
        )
    }else if (tab_state === 1){
        return(
            <div><h1>Android Tab</h1></div>
        )
    }else if (tab_state === 2){
        return(
            <div><h1>Computer System Tab</h1></div>
        )
    }else if (tab_state === 3){
        return(
            <div><h1>Algorithm Tab</h1></div>
        )
    }   
    }
    

    render(){
        return(
            <div className = "catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
                    <Tab>WEB</Tab>
                    <Tab>Android</Tab>
                    <Tab>Computer System</Tab>
                    <Tab>Algorithm</Tab>
                </Tabs>

               
                    <Grid>
                        <Cell col = {12}>
                            <div className="content">
                                {this.toggelCategories()}
                            </div>
                        </Cell>
                    </Grid>      
               
            </div>
        )
    }
}

export default Projects;