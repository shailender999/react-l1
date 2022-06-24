import pdf from './../resources/assessment.pdf'
function AssignmentPdf() {
    const iframeStyle = {
        height: '99vh',
        width: '100%',
        border: '5px solid'
    }
    return ( 
        <embed src={ pdf } style={iframeStyle} title='Assessment PDF' type="application/pdf" />
     );
}

export default AssignmentPdf;