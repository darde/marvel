import React, { Component } from 'react';
// import './styles.less';
import Character from '../Character';
import { getCharacters } from '../../api/';

let totalResults = 100;

const getOffset = () => {
  const offset = Math.floor(((Math.random() * totalResults) + 1) - 10);
  console.log('offset: ', offset);
  return offset;
};

const retrieveCharacters = (cb) => {
  const offset = getOffset();

  return getCharacters(offset)
    .then((data) => {
      totalResults = data.total;
      cb(data);
    })
    .catch((err) => {
      cb(err);
    });
};

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
    this.updateCharactersList = this.updateCharactersList.bind(this);
    this.randomCharacters = this.randomCharacters.bind(this);
  }

  componentDidMount() {
    return retrieveCharacters(this.updateCharactersList);
  }

  randomCharacters() {
    this.setState({
      characters: [],
    });
    return retrieveCharacters(this.updateCharactersList);
  }

  updateCharactersList(response) {
    console.log('resp: ', response);
    if (response.total > 0) {
      this.setState({
        characters: response.results.slice(),
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Characters</h1>
        </header>
        <div>
          {
            this.state.characters.length > 0 ? (
              this.state.characters.map(item => (
                <Character name={item.name} key={item.id} />
              ))
            ) : 'loading...'
          }
        </div>
        <div>
          <button onClick={this.randomCharacters}>Get Characters</button>
        </div>
      </div>
    );
  }
}

export default Characters;
