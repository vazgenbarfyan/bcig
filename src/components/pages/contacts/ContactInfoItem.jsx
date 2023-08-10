import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  padding: 1.5rem;
  background-color: gray;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  .icon {
    color: white;
    background-color: gray;
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({ icon = <MdPlace />, text = "" }) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">{text}</div>
    </ItemStyles>
  );
}
