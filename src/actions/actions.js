export const ADD_LOG = "ADD_LOG";
export const SHOW_LOADER = "SHOW_LOADER";


export function addLog(log){
    return {
        type:ADD_LOG,
        log
    }
}

export function toggleLoader(loader){
    return {
        type:SHOW_LOADER,
        loader
    }
}