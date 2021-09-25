import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsAction';
import ProjectSkeleton from '../../components/skeleton/ProjectsSkeleton'

class Project extends Component {

    componentWillMount() {
        this.props.getProjects();
    }

    render() {

        return (
            <div className="project service" name="work">
                <Container>
                    <div className="service-title">Featured <span>Projects</span></div>

                    {this.props.projects.loading ? (
                        <ProjectSkeleton />
                    ) : this.props.projects.error.length !== 0 ? (
                        this.props.projects.error.message
                    ) : this.props.projects.projects.projects ? (
                        <Row className="mx-0">
                            {this.props.projects.projects.projects.map((p, i) => (
                                <Col key={i} className="s-col mb-5" md="4" sm="12">
                                    <CardMedia
                                        className="card-image"
                                        image={"https://morning-thicket-92126.herokuapp.com/images/" + p.image}
                                        title="Contemplative Reptile"
                                    />

                                    <h3 className="text-center mt-3">{p.title}</h3>
                                    <p>{p.description}</p>
                                    <div className="language">
                                        <span>{p.languages}</span>
                                    </div>
                                    <a rel="noreferrer" href={p.link} className="more-btn" target="_blank">More</a>
                                </Col>
                            ))}
                        </Row>

                    ) : (
                        <ProjectSkeleton />
                    )}

                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projectsList,
    };
};

export default connect(mapStateToProps, { getProjects })(Project);
