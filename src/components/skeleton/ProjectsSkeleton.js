import React from 'react';
import { Row, Col } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArticleSkeleton = () => {
    return (
        <div className=''>
            <Row className="mx-0">
                {[1, 2, 3, 4].map(i => (
                    <Col md="3" sm="12" key={i} className="s-col mb-5">
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={140} />
                            <Typography gutterBottom variant='h5' className="mt-3 px-3">
                                <Skeleton />
                            </Typography>
                            <Typography
                                color='textSecondary'
                                className='project-text'
                            ><Skeleton count={2} /></Typography>
                            <Skeleton height={30} />
                        </SkeletonTheme>
                    </Col>
                ))}

            </Row>
        </div>
    );
};

export default ArticleSkeleton;
