
export function ArrowLeft(props){
  return(
    <div className="svg-div" onClick={() => props.setindex('dec')}>
      <svg width="14" height="24" viewBox = '0 0 14 24' xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12"  fill="none" fill-rule="evenodd"/></svg>
    </div>
    
  )
}

export function ArrowRight(props){
  return(
    <div className="svg-div" onClick={() => props.setindex('inc')} >
      <svg width="14" height="24" viewBox = '0 0 14 24 ' xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24"  fill="none" fill-rule="evenodd"/></svg>
    </div>
  )
}

