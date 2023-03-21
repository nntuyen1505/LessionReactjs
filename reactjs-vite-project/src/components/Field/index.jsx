import React from "react";
import styled from "styled-components";

const Errors = styled.span`
  position: absolute;
  top: 100%;
  left: 230px;
  color: red;
  font-size: 0.8rem;

  .relative {
    position: relative;
  }
`;

export default function Field({
  label,
  required,
  type,
  placeholder,
  renderInput,
  error,
  ...props
}) {
  return (
    <label className="relative">
      <p>
        {label}
        {required && <span>*</span>}
      </p>
      {renderInput ? renderInput?.(props) : <input type={type} {...props} />}
      {error && <Errors>{error}</Errors>}
    </label>
  );
}
