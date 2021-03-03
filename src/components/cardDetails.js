import React from 'react';
import {
  Cards,
  MainImgBox,
  Img,
  CardInfo,
  CardHeader,
  CardBody,
  CardDetail,
  ThumbNail,
  Tag,
  Title
} from './cardDetailsStyle';

const CardDetails = ({ singleData }) => {
  console.log(singleData);
  return (
    <Cards>
      <MainImgBox>
        <Img src={singleData.largeImg} alt={singleData.desc} />
        {singleData.workouts ? (
          <Tag>
            {singleData.workouts}
            <CardDetail>WORKOUTS</CardDetail>
            <div>
            <img src="https://img.icons8.com/material-sharp/15/ffffff/menu--v1.png"/>
            </div>
          </Tag>
        ) : null}
      </MainImgBox>
      <CardInfo>
        <CardHeader>
          <Title>{singleData.desc}</Title>
          <ThumbNail src={singleData.smallImg} />
        </CardHeader>
        { !singleData.workouts ?
              <CardBody>
                <img src="https://img.icons8.com/carbon-copy/15/000000/stopwatch.png"/>
              <CardDetail>{singleData.duration}</CardDetail>
              <img src="https://img.icons8.com/material-outlined/15/000000/visible--v1.png"/>
              <CardDetail>{singleData.view} M</CardDetail>
            </CardBody> : null
        }
      </CardInfo>
    </Cards>
  );
};
export default CardDetails;
