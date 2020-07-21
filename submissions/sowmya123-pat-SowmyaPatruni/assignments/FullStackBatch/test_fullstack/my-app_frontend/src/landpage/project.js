import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
    
      toggleCategories() {
    
        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoA-jKQncxZxYgT3DfbIXeA6z74nqXpoWVyw&usqp=CAU) center / cover'}} >Project 1</CardTitle>
                <CardText>
                  Description
                </CardText>
                <CardActions border>
                  <Button colored>Hackerrank</Button>
                  <Button colored>Codeforces</Button>
                  <Button colored>Codechef</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoA-jKQncxZxYgT3DfbIXeA6z74nqXpoWVyw&usqp=CAU) center / cover'}} >Project 2</CardTitle>
                <CardText>
                  Description
                </CardText>
                <CardActions border>
                  <Button colored>Hackerrank</Button>
                  <Button colored>Codeforces</Button>
                  <Button colored>Codechef</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoA-jKQncxZxYgT3DfbIXeA6z74nqXpoWVyw&usqp=CAU) center / cover'}} >Project 3</CardTitle>
                <CardText>
                  Description
                </CardText>
                <CardActions border>
                  <Button colored>Hackerrank</Button>
                  <Button colored>Codeforces</Button>
                  <Button colored>Codechef</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
    
    
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}} >Project 1</CardTitle>
              <CardText> Description
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Bitbucket</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}} >Project 2</CardTitle>
              <CardText>
                Description
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Bitbucket</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'}} >Project 3</CardTitle>
              <CardText>
                Description
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Bitbucket</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>   
          )
        } else if(this.state.activeTab === 2) {
          return (
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIZa-aatf7IDNeFQl2Z5rk_ybWi4-kXvZfRw&usqp=CAU) center / cover'}} >Project 1</CardTitle>
                <CardText>
                  Description
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIZa-aatf7IDNeFQl2Z5rk_ybWi4-kXvZfRw&usqp=CAU) center / cover'}} >Project 2</CardTitle>
                <CardText>
                  Description
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
    
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIZa-aatf7IDNeFQl2Z5rk_ybWi4-kXvZfRw&usqp=CAU) center / cover'}} >Project 3</CardTitle>
                <CardText>
                  Description
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>

          )
        } 
    
      }
    
    
    
      render() {
        return(
          <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>CODING</Tab>
              <Tab>DEVELOPMENT</Tab>
              <Tab>MACHINE LEARNING</Tab>
            </Tabs>
    
    
              <Grid>
                <Cell col={12}>
                  <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>
    
    
          </div>
        )
      }
    }

export default Project;