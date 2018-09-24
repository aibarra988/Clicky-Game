import React, { Component } from 'react'
import NavBar from './components/NavBar'
import ClickCard from './components/ClickCard'
import { Container, Col, Row } from 'reactstrap'
import { ShakeHorizontal } from 'reshake'
import Characters from './Characters.json'

class App extends Component {
  
  state = {
    characters: Characters,
    lastSelection: null,
    score: 0
  }

  handleClick = (id) => {
    const score = this.state.lastSelection === id ? 0 : 
      this.state.score === 0 ? 1 : this.state.score + 1
    this.setState({
      lastSelection: id,
      score: score
    }, () => console.log("Last id:", this.state.lastSelection, "Score:", this.state.score))
  }

  render () {
    const styles = {
      container: {
        "marginTop": "2em"
      }
    }
    return (
      <React.Fragment>
        <NavBar score={this.state.score} />
        <Container style={styles.container}>
          <Row>
            {
              this.state.characters.map(c => (
                <ClickCard src={c.src} handleClick={() => this.handleClick(c.id)} key={c.id} />
              ))
            }
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
