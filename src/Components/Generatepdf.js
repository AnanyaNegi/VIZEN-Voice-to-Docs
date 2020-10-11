import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const styles = {
    paragraph:{
        fontFamily: "Homemade Apple, cursive",
        fontSize:"20px",
    }
}
const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <p style={styles.paragraph}>{props.text}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;