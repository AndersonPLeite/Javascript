import React, {Component} from "react";
import "./main.css"
export default class Main extends Component{

   state = {
        novaTarefa: '',
    };

  handleChange = (e) => {
      this.setState({
        novaTarefa: e.target.value,
      });
  }

  render(){

    // eslint-disable-next-line no-unused-vars
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <p>{novaTarefa}</p>
        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
