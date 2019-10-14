const RepoInformation = (data ={}, action) =>{
    switch(action.type){
        case 'REPOAPI':
            return {
                ...action.APIResponse
            }
        default:
            return data
    }
}
export default RepoInformation;