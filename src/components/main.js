/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, {Component} from "react";
import "./main.css"
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';


export default class Main extends Component{

   state = {
        novaTarefa: '',
        tarefas: [],
    };

  handleSubmit = (e) => {
    e.preventDefault();
    const {tarefas} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim(); //elimina espaços no começo e no fim do input

    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
  }
  handleChange = (e) => {
      this.setState({
        novaTarefa: e.target.value,
      });
  }

  handleEdit = (e, index) => {

  }
  handleDelete = (e, index) => {
      const {tarefas} = this.state;
      const novasTarefas = [... tarefas];
      novasTarefas.splice(index, 1);

      this.setState({
        tarefas: [...novasTarefas],
      });

  }

  render(){

    // eslint-disable-next-line no-unused-vars
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa}/>
          <button type="submit">
            <FaPlus/>
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefas, index) => (
            <li key={tarefas}>
              {tarefas}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"/>
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"/>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
