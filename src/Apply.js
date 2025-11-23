const Apply = ({ applyLink, learnMoreLink }) => {
    return (
      <div className="apply">
        <p style={{fontWeight: "bold", fontSize: "calc(0.5vw + 1rem)"}}>
          Depending on the country of your university, the amount of fee can be lower.
        </p>
        <p>If this course has sparked your interest, you can learn more or apply using the buttons below!</p>
        <div className="apply-buttons">
            <a href={applyLink} target="_blank" rel="noopener noreferrer" className="button">
              Apply here
            </a>
            <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" className="button">
              Learn more
            </a>
        </div>
      </div>
    );
}
 
export default Apply;
