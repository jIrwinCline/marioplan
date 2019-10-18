export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make sync call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Jake',
            authorLastName: 'Irwin',
            authorId: 123,
            createdAt: newDate()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR'. err })
        })
    }
}