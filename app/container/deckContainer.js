import {connect} from 'react-redux'
import Deck from './../booked'
import {increaseDeck} from '../action'

const mapStateToProps = state =>{
    return{
        decinc: state.gro ? state.gro : 0
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onDeckInc:(step)=>{
            dispatch(increaseDeck(step))
        }
    }
}


const DeckContainer = connect(mapStateToProps,mapDispatchToProps)(Deck)
export default DeckContainer