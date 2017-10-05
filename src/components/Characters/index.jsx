import React, { Component } from 'react';
import './styles.less';
import Character from '../Character';
import { getCharacters } from '../../api/';

let totalResults = 100;

const getOffset = () => {
  const offset = Math.floor(((Math.random() * totalResults) + 1) - 10);
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
    const getCharactersComponents = (characters) => {
      if (!characters || characters.length === 0) return 'loading...';
      return characters.map(item => (
        <Character
          key={item.id}
          name={item.name}
          description={item.name}
          thumb={item.thumbnail}
        />
      ));
    };

    return (
      <div className='characters'>
        <header>
          <h2>Characters</h2>
        </header>
        <div>
          <button
            onClick={this.randomCharacters}
            className='characters__btn-random'
          >
            Get Characters
          </button>
        </div>
        <div className='characters__list'>
          { getCharactersComponents(this.state.characters) }
        </div>
      </div>
    );
  }
}

export default Characters;
