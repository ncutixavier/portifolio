import React from 'react';
import { Row, Col } from 'reactstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArticleSkeleton = () => {
    return (
      <div className=''>
        <Row className='mx-0'>
          {[1, 2, 3, 4].map((i) => (
            <Col md='3' sm='12' key={i} className='s-col mb-5'>
              <SkeletonTheme color='#202020' highlightColor='#444'>
                <Skeleton height={100} />
                <Skeleton height={40} />
                <Skeleton height={30} />
              </SkeletonTheme>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default ArticleSkeleton;
