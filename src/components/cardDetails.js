import React from 'react';
import {Cards, MainImgBox, Img, CardPreview, ThumbNail, Tag} from './cardDetailsStyle';

const CardDetails = ({singleData}) =>   {
    console.log(singleData)
    return (
        <Cards>
          <MainImgBox>
            <Img src={singleData.largeImg} alt={singleData.desc}/>
            <Tag>Hello</Tag>
            </MainImgBox>
            <CardPreview>
              <ThumbNail src={singleData.smallImg}/>
            </CardPreview>
        </Cards>
        
    )
}
export default CardDetails;