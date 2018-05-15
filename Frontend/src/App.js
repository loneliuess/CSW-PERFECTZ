import React, { Component } from 'react';

import { 
 getCurriculums, 
 createCurriculums, 
 deleteCurriculums 
} from './actions';

import { connect } from 'react-redux';

class App extends Component {
  state = {
    id: '',
    name: ''
  }
  
  componentDidmMount() {
    this.props.getCurriculums();
	
  }
  handleDelete = (e) => {
    const { id } = e.target;
    this.props.deleteCurriculums(id);
	
  }
  handleChange = (e) => {
    var name = e.target.name,
      value = e.target.value;
    this.setState({ [name]: value });
	
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.createCurriculums({
      name: name
    });
    this.setState({
      name: ''
    });
  }
  
  render() {
    const { Curriculums } = this.props;
    return (
      <div style={{ backgroundColor: 'pink'}}>
	  <table align="center" border="0" width="100%" bgcolor="#D02090"> 
        <p align="center"> <h1> College of Computing </h1> </p>
	  </table>
		<table>
		<tr>
		<h2> • Add Curriculum </h2> 
		</tr>
        <form onSubmit={this.handleSubmit}>
		<tr><td>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} /> </td>
		  <td>
		  <button type="submmit">Submit</button>
		 </td></tr>
        </form>
		</table>
		<br/>

          {
            Curriculums.map((Curriculums, index) => {
              return (
				<table align="center" border="1" width="60%" bgcolor="white">
                <tr bgcolor="pink"><td width="50%">
				<ol>
				<li> { Curriculums.name + ' '} </li>
				</ol>
				</td>
                <td width="10%" align="center" > < button id={Curriculums.id} onClick={this.handleDelete}> delete </button> 
				</td></tr>
				</table>
              )
            })
          }
      </div>
    );
  }
}

const mapStatetoProps = ({ Curriculums }) => {
  return { Curriculums }
}

export default connect(mapStatetoProps, { getCurriculums, createCurriculums, deleteCurriculums })(App);
