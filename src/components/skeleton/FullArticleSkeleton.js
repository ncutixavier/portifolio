import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container, Row, Col } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Variants(props) {

    return (
        <div>
            <Row lg={12} md={12} sm={12}>
                <Col>
                    <Skeleton variant="rect" width="100%" height={350} animation="wave" />
                    <Box my={2} lineHeight={2}>
                        <Typography variant="h2">
                            <Skeleton />
                        </Typography>
                    </Box>
                    <Box my={2} lineHeight={2}>
                        <Typography my={4}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton width="60%"/>
                        </Typography>
                    </Box>

                    <Box my={2} lineHeight={2}>
                        <Typography my={4}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton width="20%" />
                        </Typography>
                    </Box>

                    <Box my={2} lineHeight={2}>
                        <Typography my={4}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton width="40%" />
                        </Typography>
                    </Box>

                    <Box my={2} lineHeight={2}>
                        <Typography my={4}>
                            <Skeleton />
                        </Typography>
                    </Box>
                </Col>
            </Row>
        </div>
    );
}
