import React, {Component} from 'react';
import './All.css'
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      compare: []
    }
  }
  // onClick = if arr[0] === arr[1] then class .showing,
  //   otherwise class .hidden
  handleClick = (i) => {
    let cards = this.state.cards.slice();
    let compare = this.state.compare;

    cards[i].state = 'showing';
    this.setState({cards});

    if (compare[0]===undefined) {
      let obj1 = {};
      obj1 = cards[i];
      compare.push(obj1);
      this.setState({compare});
      return;
    } else if (compare[1]===undefined) 
        {
        let obj2 = {};
        obj2 = cards[i];
        compare.push(obj2);

        if (compare[0].value===compare[1].value) {
          // console.log('good');
          cards[compare[0].id].state = 'matched';
          cards[compare[1].id].state = 'matched';
          this.setState({compare: [], cards})
        } else {
          // console.log('wrong');
          cards[compare[0].id].state = 'hidden';
          cards[compare[1].id].state = 'hidden';
          this.setState({compare: [], cards});
        }
    }
    console.log(compare)

    // let card1 = cards[i].value;
    // if (this.state.card[i])
  }

  createNewGame = () => {
    let cards = []
    for (let i=0; i<16; i++) {
      cards.push({id:i, state:'hidden', value:i+1})
      if (cards[i].value % 2 === 0) {
        cards[i].value = cards[i].value-1;
      }
    }
    // copy of Fisher–Yates shuffle algorithm
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i].id, a[j]].id = [a[j].id, a[i].id];
            [a[i].value, a[j].value] = [a[j].value, a[i].value];
        }
        return a;
    }
    shuffle(cards)
    this.setState({cards})
  }
  renderSquares = () => {
    return (
      this.state.cards.map((d, i)=> {
        return (
          <Square
            onClick={()=> this.handleClick(i)}
            state={this.state.cards[i].state}
            card={d.value}
            id={d.id}
          />
        )
      })
    )
  }


  render() {
    
    return (
      <div>
        <button onClick={this.createNewGame}>Create New Game</button>
        <div className='gameboard'>
          {this.renderSquares()}
        </div>
      </div>
    );
  }
}

export default Board;