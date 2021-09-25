import React from 'react';
import { Row, Col } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from 'react-loading-skeleton';

const ArticleSkeleton = () => {
    return (
        <div className=''>
            {[1, 2, 3].map(i => (
                <Row lg={12} md={12} sm={12} key={i}>
                    <Col lg={4} md={4} sm={4}>
                        <div className='article-img'><Skeleton height="100%" className="skeleton-img" /></div>
                    </Col>
                    <Col lg={8} md={8} sm={8}>
                        <CardContent>
                            <Typography gutterBottom variant='h4' className="mb-4">
                                <Skeleton />
                            </Typography>
                            <Typography
                                color='textSecondary'
                                className='article-text'
                            ><Skeleton count={5} /></Typography>
                        </CardContent>
                        <CardContent>
                            <Typography gutterBottom>
                                <Skeleton />
                            </Typography>
                        </CardContent>
                    </Col>
                </Row>
            ))}
        </div>
    );
};

export default ArticleSkeleton;
