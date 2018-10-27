import * as React from 'react';

interface Props {
  black: boolean
  children: React.ReactNode
}

const Square = (props: Props) => {
  const fill = props.black ? 'black' : 'white';
  const stroke = props.black ? 'white' : 'black';
  return <div style={style(fill, stroke)}>
    {props.children}
  </div>
}

type bnw = 'black' | 'white';
const style = (fill: bnw, stroke: bnw) => ({
  backgroundColor: fill,
  color: stroke,
  width: '100%',
  height: '100%'
})

export default Square;