import { connect } from 'react-redux';
import axios from 'axios';
import { RepoAPIResponse } from '../action/repoaction';

export async function getRepoDetails(props) {
    let apiRequest  = "https://api.github.com/users/" + props + "/repos";
        const response = await axios.get(apiRequest);
        let StoreAPIResponse = response.data;
        let ApiAction = {
            imgurl:'',
            name:'',
            favreport : []
        };
        ApiAction.imgurl = response.data[0].owner.avatar_url;
        ApiAction.name = response.data[0].owner.login;
        let repolist = {};
        for (let i =0; i < response.data.length ; i++){
            repolist = {
                "name" : response.data[i].name,
                "description" : response.data[i].description,
                "language" :response.data[i].language,
            };
            if ((i + 1) < response.data.length){
                repolist["namepair"] = response.data[i+1].name;
                repolist["descriptionpair"] = response.data[i+1].description;
                repolist["languagepair"] = response.data[i+1].language;
            }
            ApiAction.favreport.push(repolist);
            i = i + 1
        }
        return ApiAction;

}
export default getRepoDetails;
