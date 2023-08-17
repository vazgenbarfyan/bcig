import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

export default function ContactInfoItem({ icon = <MdPlace />, text = "" }) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">{text}</div>
    </ItemStyles>
  );
}

const ItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  .icon {
    color: rgb(19, 139, 67);
    padding-left: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .info{
    color: rgb(19,139,67)
  }
  svg {
    width: 3.5rem;
  }
`;