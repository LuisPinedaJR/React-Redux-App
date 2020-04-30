import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { data } from '../actions/dataAction'
import styled from 'styled-components'

const ResponseComp = styled.div`
  width: 80%;
`

const CountryData = styled.div`
  background-color: #1f2b35;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  width: 70%;
  margin-left: 15%;
  border-radius: 5px;
  color: white;
`

const Title = styled.h1`
  margin: 6%;
`

const Button = styled.button`
  padding: 2%;
  font-size: 1.2rem;
  border-radius: 24px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  transition-timing-function: ease-in-out;
  transition: 0.25s;
  outline: none;
  margin: 1%;

  :hover {
    background-color: #ff4f7a;
    color: white;
    transition-timing-function: ease-out;
    transition: 0.25s;
    border-style: none;
    outline: none;
  }
  :active {
    outline: none;
  }
`

const ResponseComponent = ({
  data,
  response,
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
  return (
    <ResponseComp>
      <Title>COVID-19 Data APP </Title>
      <Button onClick={data}>Click here for data</Button>
      <CountryData>
        <h2>{response}</h2>
        <h2>New Cases: {newConfirmed}</h2>
        <h2>New Deaths: {newDeaths}</h2>
        <h2>New Recovered: {newRecovered}</h2>
      </CountryData>
    </ResponseComp>
  )
}

const mapStateToProps = state => ({
  response: state.dataReducer.response,
  newConfirmed: state.dataReducer.newConfirmed,
  newDeaths: state.dataReducer.newDeaths,
  newRecovered: state.dataReducer.newRecovered,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      data,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ResponseComponent)
