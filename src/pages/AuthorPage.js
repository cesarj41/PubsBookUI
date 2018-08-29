import React from 'react';
import { Card, CardHeader, CardBody, Table, Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap';
import THead from '../components/Table/THead';
import TBody from '../components/Table/TBody';

const AuthorPage = ({authors, back, onBackClick}) =>
    <Card>
        <CardHeader>
            <i className="fas fa-table"/> Top Selling Books by Author
        </CardHeader>
        <CardBody>
            <Table hover responsive>
                <THead values={['Author', 'Top Selling Book', 'Type', 'Price', 'Published']} />
                <TBody values={authors}/>
            </Table>
            {back && 
                <Row>
                    <Col xs={{size: 1, offset: 5}}>
                        <Pagination size="lg">
                            <PaginationItem >
                                <PaginationLink previous onClick={onBackClick} />
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            }
        </CardBody>
    </Card>
    

export default AuthorPage;
