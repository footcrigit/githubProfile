import React from 'react';
import {Img, ImageContentDiv,Input,Button} from '../asset/ImageDef';
import { connect } from 'react-redux';
import { RepoAPIResponse } from '../action/repoaction';
import {getRepoDetails} from '../service/getRepoDetails';

export class ImageDef extends React.Component {
    constructor(props){
        super(props);
        this.SearchRepo = this.SearchRepo.bind(this);
        this.ApiAction = {
            imgurl:'',
            name:'',
            favreport : []
        };
    }
    async SearchRepo(e){
        e.preventDefault();
        let reponame = e.target.searchRepoID.value;
        let resp = await getRepoDetails(reponame);
        this.props.RepoAPIResponse(resp);
    }
    render(){
        return(
            <ImageContentDiv>
                <form onSubmit = {this.SearchRepo}>
                    <Input type = "text" id = "searchRepoID" placeholder ="Enter Github id" />
                    <Button type = "submit" id ="searchSubmit">Search</Button>
                </form>
                <Img src = {this.props.RepoAPIDetails.imgurl}></Img>
                <h3>{this.props.RepoAPIDetails.name}</h3>
            </ImageContentDiv>
        )
    }
}

const mapDispatchToProps = (dispatch,props) => ({
    RepoAPIResponse : (resp) => dispatch(RepoAPIResponse(resp))
})

const mapStateToProps = (state) => ({
    RepoAPIDetails: state.RepoAPIResponse
})

export default connect(mapStateToProps,mapDispatchToProps)(ImageDef);