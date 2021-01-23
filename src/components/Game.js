import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import loadDetails from '../actions/detailsAction';

// Router
import { Link } from 'react-router-dom';

// Style & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Utilities
import { smallImage } from '../util';

const Game = ({ name, released, img, id }) => {
   const dispatch = useDispatch();
   const loadDetailsHandler = () => {
      document.body.style.overflow = 'hidden';
      dispatch(loadDetails(id));
   }

   return (
      <StyledGame onClick={loadDetailsHandler}>
         <Link to={`/game/${id}`}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={smallImage(img, 420)} alt={name} />
         </Link>
      </StyledGame>
   );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;