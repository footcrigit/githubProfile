import React from 'react';
import {NavContent,OverViewContent,MainContentDiv,
        ButtonNav,RepoContent,OverViewContentCol,RepoContentBar} from '../asset/ContentDef';
import { connect } from 'react-redux';

export class ContentDef extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : ''
        }
    }
    componentDidMount(){
        this.setState({
            name : this.props.length
        })
    }
    componentDidUpdate(){
        if(this.props.RepoAPIDetails.length > 0){
            this.setState({
                name : this.props.RepoAPIDetails.length
            })
        }
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
                        <RepoContentBar>
                            <section>
                                <h4>Popular Repositories</h4>
                            </section>
                        </RepoContentBar>
                    </OverViewContent>

                    {
                        this.props.RepoAPIDetails.name   ? 
                        this.props.RepoAPIDetails.favreport.map((item, index) =>
                            {
                                return(
                                <OverViewContent key = {index}>
                                    <RepoContent>
                                        <section>
                                            <h5>{item.name}</h5>
                                            <p>{item.description}</p>
                                            <p>{item.language}</p>
                                        </section>
                                    </RepoContent>
                                    <RepoContent>
                                        <section>
                                            <h5>{item.namepair}</h5>
                                            <p>{item.descriptionpair}</p>
                                            <p>{item.languagepair}</p>
                                        </section>
                                    </RepoContent>
                                </OverViewContent>
                                )
                                
                            }) : undefined
                    } 
                </OverViewContentCol>
            </MainContentDiv>
        )
    }
}

const mapStateToProps = (state) => ({
    RepoAPIDetails: state.RepoAPIResponse
})

export default connect(mapStateToProps,undefined)(ContentDef);