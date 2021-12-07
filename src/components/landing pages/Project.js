import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsAction';
import ProjectSkeleton from '../../components/skeleton/ProjectsSkeleton'
import GitHubIcon from '@material-ui/icons/GitHub';

class Project extends Component {

    componentWillMount() {
        this.props.getProjects();
    }

    render() {

        return (
          <div className='project service' name='work'>
            <Container>
              <div className='service-title'>
                Featured <span>Projects</span>
              </div>

              {this.props.projects.loading ? (
                <ProjectSkeleton />
              ) : this.props.projects.error.length !== 0 ? (
                this.props.projects.error.message
              ) : this.props.projects.projects.projects ? (
                <Row className='mx-0'>
                  {this.props.projects.projects.projects.map((p, i) => (
                    <Col key={i} className='s-col mb-5' md='4' sm='12'>
                      <div className='card-title-details'>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                      </div>

                      <div className='languages'>
                        <span>{p.languages}</span>
                      </div>

                      <div className='card-links'>
                        <a
                          rel='noreferrer'
                          href={p.link.split(',')[0]}
                          target='_blank'
                        >
                          Explore
                        </a>
                        <a rel='noreferrer' href={p.link.split(',')[1]}>
                          <GitHubIcon />
                        </a>
                      </div>
                    </Col>
                  ))}
                </Row>
              ) : (
                <ProjectSkeleton />
              )}
            </Container>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projectsList,
    };
};

export default connect(mapStateToProps, { getProjects })(Project);
