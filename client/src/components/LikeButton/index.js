import React, { useContext } from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";
import ConfettiPiece from './ConfettiPiece';

import { range, sample, random } from '../../utils';
import { TweetContext } from '../Tweet/TweetContext';

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLikedByCurrentUser } = useContext(TweetContext);

  const heartSize = size * 0.6;

  return (
      <Wrapper style={{ width: size, height: size }}>
        <CenteredWithinParent>
          {isLikedByCurrentUser &&
            range(12).map((i) => (
              <ConfettiPiece
                key={i}
                angle={30 * i}
                distance={random(8, 25)}
                color={sample(PARTICLE_COLORS)}
              />
            ))
          }
        </CenteredWithinParent>

        {isLikedByCurrentUser ? (
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
          </ScaleIn>
        ) : (
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
        )}
        {isLikedByCurrentUser && <PoppingCircle color="#E790F7" />}
      </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredWithinParent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LikeButton;
