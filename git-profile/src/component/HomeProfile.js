import React from 'react';
import ImageDef from './ImageDef';
import ContentDef from './ContentDef';
import {getRepoDetails} from '../service/getRepoDetails';
import { connect } from 'react-redux';
import { RepoAPIResponse } from '../action/repoaction';

export class HomeProfile extends React.Component {
    constructor(props){
        super(props)
    }
    async componentDidMount(){
        let response = await getRepoDetails("supreetsingh247");
        this.props.RepoAPIResponse(response);
    }
    render(){
        return(
            <div className = "containerMain">
               <table className = "mainTable">
                   <tbody>
                       <tr >
                            <td className = "imageDiv">
                                <ImageDef></ImageDef>
                            </td>
                            <td className = "ConentDiv">
                                <ContentDef ></ContentDef>
                            </td>
                       </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch,props) => ({
    RepoAPIResponse : (resp) => dispatch(RepoAPIResponse(resp))
})


export default connect(undefined,mapDispatchToProps)(HomeProfile);