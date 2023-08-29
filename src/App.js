import React, {Component} from 'react'
export default class App extends Component{
  constructor(){
super()
this.state={
  fullName: "Frank Ribéry",
  bio:"ipsum lorem, lorem ipsum talkc to ipsum lorem ",
  imgSrc:"https://th.bing.com/th/id/OIP.71JQhIb0Mq5auDjYJD2N4AHaIs?pid=ImgDet&w=236&h=277&rs=1",
  profession:"Footbaleur",
  show:false
}

}
toggle=()=>{
  this.setState({show: !this.state.show})
}

  render(){
return(
<div>
{/*bouton */}
<button style={{marginLeft:"50%"}} onClick={()=>this.toggle()}>Afficher / cacher</button>

{this.state.show &&(<div style={{textAlign:"center"}}>
<h1>Fiche joueur </h1>
{/* state du nom*/}
<h1>{this.state.fullName}</h1>
{/*State biographie*/}
<h2>{this.state.bio}</h2>
{/*state image */}
<img src={this.state.imgSrc} alt='frank ribey face'></img>
{/*state profession*/}
<h1>{this.state.profession}</h1></div>)}

</div>
)
 }
}