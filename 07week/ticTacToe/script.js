'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        turn: 'X',
    };
  }
  winCheck = (myObj) => {
    const wins = [
      ['cell0','cell1','cell2'], ['cell3','cell4','cell5'], ['cell6','cell7','cell8'],  // horizontal
      ['cell0','cell3','cell6'], ['cell1','cell4','cell7'], ['cell2','cell5','cell8'],  // vertical
      ['cell0','cell4','cell8'], ['cell2','cell4','cell6']            // diagonal
    ];
    const stateKeys = Object.keys(myObj).splice(0,1);
    return wins.some(winCombo => winCombo.every(key => stateKeys[key] === myObj['turn']));

  }


  handleClick=(cell)=>{
    const state = {...this.state};
    if (!state[cell]) {
      state[cell] = this.state.turn;
      if (this.winCheck(state)) {
        this.message = `${this.state.turn} has won.`
      } else {
        state['turn'] = this.state.turn === 'X' ? 'O' : 'X'
      }
    }
    this.setState(state)


  };


  render() {

    return (

      <div>
        <h1>The player turn is {this.state.turn}</h1>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
        </div>
        <div id='announce-winner'>{this.message}</div>
      </div>

    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
