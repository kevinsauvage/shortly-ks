import React from "react";
import Button from "./Button";
import "./SearchResultCard.css";

const SearchResultCard = ({ handleCopy, result }) => {
  return (
    <div
      data-copy={result.result}
      className="result__card flex-jc-sb-ai-center">
      <p>{result.origin}</p>
      <div className="second__section__results__right flex-ai-c">
        <p className="result">{result.result}</p>
        <div onClick={handleCopy}>
          <Button
            text="Copy"
            width="103px"
            height="40px"
            radius="5px"
            fontSize="15px"
            lineHeight="22.5px"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
