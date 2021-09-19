import React, { ReactNode, useEffect,useState } from "react";
import LittleLight from "../components/LittleLight";
import FaIcon from "../components/FaIcon";
import { useAppSelector,useAppDispatch } from "../app/hooks";
import { getTerm } from "../store/features/SetSearcTerm";
const displayStyles={
    width:'50%',
    height:'100%',
}

const pokeA = {
    width:'100%',
    padding:'1rem'
}

const inputScreenDims = {
    width:'60%',
    height:'15vh',
    backgroundColor:'#59585A',
    borderRadius:'1vw',
    border:'0.25vw solid black',
    boxShadow:'inset 0 0 1rem black',
    marginBottom:'1vw',
    fontSize:'1vw',
    color:'white'
}

const buttonWidth = {
    width:'60%',
    minHeight:'30vh',
    marginBottom:'1vw'

}

const inputButtonWidth = {
    width:'60%',
    minHeight:'23vh',
}

const buttons = {
    backgroundColor:'#86BDFF',
    width:'12.5%',
    height:'20%',
    border:'.25vw solid black',
    borderRadius:'.5vw',
    fontSize:'1vw'
}

const greyBar ={
    width:'5vw',
    border:'.25vw solid black',
    backgroundColor:'#59585A',
    height:'1.5vh',
    marginLeft:'1vw'
}

const lightGreyBar ={
    width:'4vw',
    border:'.25vw solid black',
    backgroundColor:'#FFFFFF',
    height:'4vw',
    borderRadius:'.75vw'
}

const bigGreyBar ={
    width:'45%',
    border:'.25vw solid black',
    backgroundColor:'#59585A',
    height:'4.5vw',
    borderRadius:'.75vw'

}

const liveFeed = {
    width: '50%',
    backgroundColor: '#ff0066',
    border:'.25vw solid black',
    borderRadius:'.75vw',
    color:'black',
    maxHeight : '60vh',
    overflow:'scroll',
}

const liveFeedNoVis = {
    display:'none'
}

const linkStyle = {
    width:'100%',
    color:'white',
    textDecoration: 'none',
    fontSize:'1vw',
    lineHeight:'1.25',
    letterSpacing:'1px'
}


const MainInputContainer:React.FC = () => {

    const keyArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','enter','backspace','space','clear']
    const [termEntered,isTermEntered] = useState<boolean>(false);
    let isAppOn = useAppSelector(state=>state.appOnReducer.appOn)
    let isPokeAvail = useAppSelector(state=>state.pokeImporter[0])
    let pokeTerm = useAppSelector(state=>state.pokeSearch.pokeName)
    let keyInd = 0;
    const dispatch = useAppDispatch();

    const [inputText,setInputText] = useState<Array<String>>([]);
    const handleInputChange = (event:React.MouseEvent<HTMLButtonElement>) => {
        let x:any | string =event.target;
        switch(x.innerHTML){
            case 'SPACE':
                setInputText(prev=>[...prev,' ']);
                break;
            case 'CLEAR':
                setInputText([]);
                break;
            case 'BACKSPACE':
                setInputText(prev=>prev.slice(0,prev.length-1))
            break;
            case 'ENTER':
                dispatch(getTerm(inputText.join('')))
            break;
            default:
                setInputText(prev=>[...prev,x.innerHTML]);
                break;
        }
    }   

    const  isMatched = () => {
        if(termEntered){
            return; 
        } else {
            isTermEntered(true);
        }
    }

    const determineMatchStyle = () => {
        if(termEntered){
            return liveFeed;
        } else {
            return liveFeedNoVis;
        }
    }

    const determineMatchClass = () => {
        if(termEntered){
            return 'inner_screen addafter';
        } else {
            return 'inner_screen';
        }
    }

    useEffect(()=>{
        console.log(pokeTerm)
    },[pokeTerm])

    return(
        <section style={displayStyles}>
            
            <div style={inputScreenDims} className='input_screen'>
                {isAppOn ? inputText : 'Please enter a Pokemon!'}
            </div>

            {isPokeAvail ? <div style={determineMatchStyle()} className={determineMatchClass()}>{isPokeAvail ? isPokeAvail.results.map(poke=>{
                    if(poke.name.includes(pokeTerm.toLowerCase()) && pokeTerm.length > 0 && !poke.name.includes('-')){
                        isMatched();
                        return <a key={isPokeAvail.results.indexOf(poke)} style={linkStyle} href={poke.url}>{poke.name}</a>
                    }

                }) : 'Loading...'}</div> : <div style={liveFeedNoVis} className='inner_screen'></div>}

            <div style={buttonWidth} className='key_container'>
                {keyArr.map(item=><button onClick={handleInputChange} style={buttons} key={keyInd=keyInd+1} className={`letter ${item}`}>{item.toUpperCase()}</button>)}
            </div>   

            <div className='light_container' style={inputButtonWidth}>
                <div style={{width:'100%',marginBottom:'1vw'}}>
                    <div>
                        <LittleLight color='red'/>
                        <LittleLight color='red'/>
                    </div>
                    <div>
                        <div style={greyBar}></div>
                        <div style={greyBar}></div>
                    </div>
                </div>
                <div className='yellow_light_container' style={{width:'100%',marginBottom:'1vw'}}>
                    <div>
                        <div style={lightGreyBar}></div>
                        <div style={lightGreyBar}></div>
                    </div>
                    <div>
                        <LittleLight color='yellow'/>
                    </div>
                </div>
                <div className='button_navigation' style={{width:'100%',marginBottom:'2vw'}}>
                    <div className='up' style={bigGreyBar}><FaIcon faname='fas fa-caret-up'/></div>
                    <div className='down' style={bigGreyBar}><FaIcon faname='fas fa-caret-down'/></div>
                </div>
            </div>
        </section>
    )
} 

export default MainInputContainer;