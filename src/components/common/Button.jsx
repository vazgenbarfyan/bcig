import styled from "styled-components";

const Button = styled('button')(({ theme }) => ({
    // in default mode.
    backgroundColor: 'lightgreen',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'darkgreen',
    }


}));

export {Button};