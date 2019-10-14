import React from 'react';
import {NavContent,OverViewContent,MainContentDiv,
        ButtonNav,RepoContent,OverViewContentCol} from '../asset/ContentDef';
import { connect } from 'react-redux';

class ContentDef extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <MainContentDiv>
                <NavContent> 
                        <ButtonNav>Overview</ButtonNav>
                        <ButtonNav>Repositories</ButtonNav>
                        <ButtonNav>Project</ButtonNav>
                        <ButtonNav>Stars</ButtonNav>
                        <ButtonNav>Followers</ButtonNav>
                        <ButtonNav>Following</ButtonNav>
                </NavContent>
                <OverViewContentCol>
                <OverViewContent>
                        <RepoContent>
                            <section>
                                <h3>Popular Repositories</h3>
                            </section>
                        </RepoContent>
                    </OverViewContent>
                    <OverViewContent>
                        <RepoContent>
                            <section>
                                <h3>WWF</h3>
                                <p>details</p>
                                <p>details</p>
                            </section>
                        </RepoContent>
                        <RepoContent>
                            <section>
                                <h3>WWF</h3>
                                <p>details</p>
                                <p>details</p>
                            </section>
                        </RepoContent>
                    </OverViewContent>
                    <OverViewContent>
                    <RepoContent>
                            <section>
                                <h3>WWF</h3>
                                <p>details</p>
                                <p>details</p>
                            </section>
                        </RepoContent>
                        <RepoContent>
                            <section>
                                <h3>WWF</h3>
                                <p>details</p>
                                <p>details</p>
                            </section>
                        </RepoContent>
                    </OverViewContent>
                    <OverViewContent>
                    <RepoContent>
                            <section>
                                <h3>WWF</h3>
                                <p>details</p>
                                <p>details</p>
                            </section>
                        </RepoContent>
                        <RepoContent>
                            <section>
                                <h3>WWF</h3>
                                <p>details</p>
                                <p>details</p>
                            </section>
                        </RepoContent>
                    </OverViewContent>
                </OverViewContentCol>
            </MainContentDiv>
        )
    }
}

const mapStateToProps = (state) => ({
    RepoAPIDetails: state.RepoAPIResponse
})

export default connect(mapStateToProps,undefined)(ContentDef);