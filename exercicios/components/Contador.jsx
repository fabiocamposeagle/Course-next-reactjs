import { Component } from "react";

export default class Contador extends Component {
    /* estado interno, propriedade state;de dentro de classe o estado 
       de um componente baseado em classe é state */
    
       state = {
           numero: this.props.valorInicial ?? 0,
           passo: this.props.passo ?? 1 
       }
    
    // inc e dec criamos duas funçoes para mecher no estado com componetes
    // para incrementar o valor e decrementar o valor
    inc = () => {
        this.setState({
             numero: this.state.numero + this.state.passo
            /*exemplo  numero: this.state.numero + 37 */
        })
    }

    dec = () => {
      this.setState({
           numero: this.state.numero - this.state.passo 
          /* exemplo numero: this.state.numero - 37 */
      })
    }
    // Uma funçao abaixo - para renderizar parte do jsx
    renderForm() {
        return (
            <>
               <input type="number" min={1} max={1000}
                  value={this.state.passo} 
                  onChange={ev => this.setState({ passo: +ev.target.value })} />
               <button onClick={this.dec}>-</button>
               <button onClick={this.inc}>+</button>
            </>
        )
    }
    // função render , funcao chamada para renderizar seu componente
    // baseado em classe
    render() {
        return (
          <div>
            <h1>Contador (usando Classe)</h1>
            <h2>{this.state.numero}</h2>
            {this.renderForm()}
          </div>
        )
    }
}

// export default Contador